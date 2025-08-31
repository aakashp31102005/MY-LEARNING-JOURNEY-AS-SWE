package com.jdbc;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) throws SQLException {
        try(Statement s=createStatement();){
            String query="select*from todos";
            try {
                ResultSet rs = s.executeQuery(query);
                while (rs.next()) {
                    System.out.println(rs.getInt("id") + "|" + rs.getString("task") + "|" + rs.getBoolean("completed"));
                }
            }catch (SQLException e){
                System.out.println("table is empty so result set can't point to row"+e);
            }
            int taskcount=preparecallprecedure("{call taskcount(?)}");
            System.out.println(taskcount);

            int id=2;
            preparecallquery("select *from todos where id= ?",id);
           // batchprocessing();
            //batchprocessingtwo();
           // batchinreal();
            resutlset();
        }


    }
        public static Connection creatingConnection() throws SQLException {
            Properties p=new Properties();
            p.setProperty("user","root");
            p.setProperty("password","password");
            String url="jdbc:mysql://localhost:3306/todoapp";
            return DriverManager.getConnection(url,p);
        }
        public static Statement createStatement()throws SQLException{
              Connection c=  creatingConnection();
              return c.createStatement();
        }
        public static int preparecallprecedure(String callstmt) throws SQLException {
            try(Connection c=creatingConnection()){
             CallableStatement cs=   c.prepareCall(callstmt);
             cs.registerOutParameter(1, java.sql.Types.INTEGER);
             cs.execute();
            int tasks= cs.getInt(1);
            return tasks;
            }
        }

        public static void preparecallquery(String query,int id) throws  SQLException{
        try(Connection con=creatingConnection()){
           PreparedStatement ps= con.prepareStatement(query);
           ps.setInt(1,id);
           ResultSet rs=ps.executeQuery();
           rs.next();
            System.out.println("the task of used id:" +rs.getString("task"));
        }
        }
        public static void batchprocessing()throws SQLException{
               Statement s= createStatement();
               s.addBatch("insert into todos(id,task,completed) value(13,'have sex',false)");
               s.addBatch("insert into todos(id,task,completed) values(14,'coding',true)");
               s.executeBatch();
               s.close();//without try with resource we have to manually close the connections
        }
        public static void batchprocessingtwo() throws SQLException {
                Connection cn=creatingConnection();
                PreparedStatement ps=cn.prepareStatement("insert into todos(id,task,completed) values(?,?,?)");
                cn.setAutoCommit(false);
                ps.setInt(1,15);
                ps.setString(2,"chat");
                ps.setBoolean(3,false);
                ps.addBatch();

                ps.setInt(1,16);
                ps.setString(2,"eat");
                ps.setBoolean(3,false);
                ps.addBatch();
                ps.executeBatch();
                cn.commit();
                cn.close();
        }
        public static void batchinreal() throws SQLException {
        Connection cn=creatingConnection();
        PreparedStatement ps=cn.prepareStatement("insert into todos(id,task,completed) values(?,?,?)");
        List<todos> ls=new ArrayList<>();
        boolean complete=false;
        for(int i=0;i<10;i++){
            todos tls=new todos(i,String.format("task %d",i),!complete);
            ls.add(tls);
            }
        for(todos td: ls){
            ps.setInt(1,td.getId());
            ps.setString(2,td.getTask());
            ps.setBoolean(3,td.isCompleted());
            ps.addBatch();
        }
        ps.executeBatch();
        cn.close();
        }
        public static void resutlset() throws SQLException {
        Connection cn=creatingConnection();
//            System.out.println( cn.getSchema());
            Statement s=cn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);
            String query="select *from todos";
            ResultSet rs=s.executeQuery(query);
            rs.setFetchDirection(ResultSet.FETCH_REVERSE);
            System.out.println(rs.first());
            //to print in reverse order
            rs.afterLast();
            while(rs.previous()){
                System.out.println(rs.getString("task"));
            }

        }
    }

    class  todos{
        private int id;
        private String task;
        private boolean completed;
        public todos(int id,String task,boolean completed){
            this.id=id;
            this.task=task;
            this.completed= completed;
        }
        public int getId() {
            return id;
        }

        public boolean isCompleted() {
            return completed;
        }

        public String getTask() {
            return task;
        }

    }
