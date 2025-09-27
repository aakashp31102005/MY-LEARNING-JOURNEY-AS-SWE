
# 🧑‍💻 VS Code Mastery Roadmap

## 1. **Speed & Productivity Hacks**

* **Snippets** (custom + extension-based) → `cn-`, `cns`, `rfc` boilerplates.
* **Emmet shortcuts** (`div.my-class` → `<div class="my-class"></div>`).
* **Multi-cursor editing** (`Ctrl+D`, `Alt+Click`, column selection).
* **Code wrapping / surround with snippet**.

---

## 2. **Navigation Superpowers**

* Quick open (`Ctrl+P`), jump to symbol (`Ctrl+Shift+O`), search across workspace (`Ctrl+T`).
* Peek definition (`Alt+F12`), go to definition (`Ctrl+Click`).
* Bracket/tag matching (`Ctrl+Shift+\`).
* Bookmarks extension → jump to key spots instantly.

---

## 3. **Refactoring & Code Actions**

* Rename symbol (`F2`).
* Extract method/variable (`Ctrl+.`).
* Auto-import missing modules.
* Multi-file rename with IntelliSense awareness.

---

## 4. **Debugging Like a Pro**

* Built-in debugger (set breakpoints, step in/out).
* **Conditional breakpoints & logpoints** (instead of `console.log`).
* Debug configs in `launch.json`.
* Inline variable values while debugging.

---

## 5. **Git & Collaboration**

* Built-in Git panel → staging/committing inside VS Code.
* Inline diffs + history.
* GitLens → advanced blame & timeline.
* Live Share → real-time pair programming.

---

## 6. **Search & Replace Mastery**

* Global search (`Ctrl+Shift+F`).
* Regex-based search/replace (`console\.log\(.*\)`).
* Multi-file replace.
* Find & refactor patterns across big codebases.

---

## 7. **Tasks & Automation**

* **Integrated terminal** (\`Ctrl+\`\`).
* Multiple terminals + split panes.
* Custom **tasks.json** (lint → build → test pipelines).
* Keybinding tasks to run with one shortcut.

---

## 8. **Workspace & Project Management**

* `.vscode/settings.json` → project-specific config (lint, formatting).
* `.code-workspace` → multi-repo setups.
* **Profiles** → switch setups (React, Node, Python).
* Settings Sync → same setup across devices.

---

## 9. **Advanced Editing Tricks**

* Code folding + `#region` blocks.
* Column editing mode.
* Copy/move lines (`Shift+Alt+↑/↓`, `Alt+↑/↓`).
* Format on save (Prettier/ESLint).
* JSDoc comments for IntelliSense.

---

## 10. **Extensions That Wow**

* **ES7+ React Snippets** (e.g. `rafce`).
* **Prettier / ESLint** → clean code always.
* **Path Intellisense** → auto file path completion.
* **Error Lens** → highlight errors inline.
* **Better Comments** → TODO/FIXME highlighting.
* **REST Client** → test APIs inside VS Code.
* **Copilot/TabNine** → AI-powered coding.

---

## 11. **Customization & Aesthetics**

* Custom keybindings (`keybindings.json`).
* Minimal but pro-looking theme/icon pack.
* Custom status bar tweaks.
* Keyboard-driven workflow (less mouse).

---

# ⚡ The 3 Levels of VS Code Pro

* **Level 1: Flashy Dev (surface-level skills)**
  → Snippets, Emmet, multi-cursor, fast navigation.

* **Level 2: Efficient Dev (solid workflow)**
  → Git integration, debugging, tasks, workspace management.

* **Level 3: Wizard Dev (deep mastery)**
  → Regex refactors, conditional debugging, snippet libraries, custom automation, minimal + portable setup.

---




## VS CODE SHORTCUTS FOR CREAING HTML ELEMNTS

| Shortcut / Abbreviation             | Effect / Output                                                                  |                                                 |     |
| ----------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------- | --- |
| `!` + Tab                           | Full HTML boilerplate (`<!DOCTYPE html><html>…`)                                 |                                                 |     |
| `html:5` + Tab                      | Same as `!`, HTML5 boilerplate                                                   |                                                 |     |
| `div` + Tab                         | `<div></div>`                                                                    |                                                 |     |
| `div.className`                     | `<div class="className"></div>`                                                  |                                                 |     |
| `div#idName`                        | `<div id="idName"></div>`                                                        |                                                 |     |
| `ul>li*3`                           | `<ul><li></li><li></li><li></li></ul>`                                           |                                                 |     |
| `ul>li{Home}+li{About}+li{Contact}` | `<ul><li>Home</li><li>About</li><li>Contact</li></ul>`                           |                                                 |     |
| `a[href="#"]`                       | `<a href="#"></a>`                                                               |                                                 |     |
| `img[src="image.jpg"]`              | `<img src="image.jpg" alt="">`                                                   |                                                 |     |
| `section>div.container>p{Hello}`    | Nested structure: `<section><div class="container"><p>Hello</p></div></section>` |                                                 |     |
| `*`                                 | Multiply element (`li*5`) → 5 `<li>` tags                                        |                                                 |     |
| `>`                                 | Child element (`ul>li`)                                                          |                                                 |     |
| `+`                                 | Sibling element (`h1+p`)                                                         |                                                 |     |
| `{text}`                            | Add inner text inside tag (`p{Hello}` → `<p>Hello</p>`)                          |                                                 |     |
| `^`                                 | Climb up one level in hierarchy (`div>ul>li*3^p` → `p` is sibling of `div`)      |                                                 |     |
| `.`                                 | Add class (`div.box` → `<div class="box"></div>`)                                |                                                 |     |
| `#`                                 | Add id (`div#header` → `<div id="header"></div>`)                                |                                                 |     |
| `[attr=value]`                      | Add attribute (`a[href="link.html"]`)                                            |                                                 |     |
| `$`                                 | Auto-numbering (`li.item$*5` → `<li class="item1"></li>…`)                       |                                                 |     |
| \`                                  | \`                                                                               | Placeholder for cursor position (\`div>p{Hello} | \`) |
| `input:password`                    | `<input type="password">`                                                        |                                                 |     |
| `input:checkbox`                    | `<input type="checkbox">`                                                        |                                                 |     |
| `table>tr*2>td*3`                   | Table with 2 rows and 3 columns each                                             |                                                 |     |
| `link:css`                          | `<link rel="stylesheet" href="">`                                                |                                                 |     |
| `script:src`                        | `<script src=""></script>`                                                       |                                                 |     |
| `meta:vp`                           | `<meta name="viewport" content="width=device-width, initial-scale=1.0">`         |                                                 |     |
| `!` + Tab → type + Tab in `<head>`  | Quickly add `<meta charset="UTF-8">` + `<title>`                                 |                                                 |     |


---

#  Custom User Snippets

### 1. **What a snippet is**

A snippet is a shortcut → when you type a prefix (like `cn-`) and hit **Tab/Enter**, it expands into code (like `className={styles.}`).

---

### 2. **Where snippets live**

Snippets are stored in JSON files inside VS Code:

* Global snippets → available everywhere.
* Language-specific snippets → tied to a language (e.g., `javascriptreact.json` for React).

📍 To access:

1. Open **Command Palette** (`Ctrl + Shift + P` / `Cmd + Shift + P`)
2. Type → **Configure User Snippets**

---

### 3. **Snippet Structure**

Here’s the anatomy of a snippet:

```json
{
  "Snippet Name": {
    "prefix": "trigger",               // what you type
    "body": [
      "actual code here $1 $2",        // what it expands into
      "second line of code"
    ],
    "description": "what this snippet does"
  }
}
```

* **`prefix`** → keyword you type (`cn-`, `cns`)
* **`body`** → the code it inserts (can be single or multiple lines)
* **`description`** → tooltip that appears when IntelliSense suggests it

---

### 4. **Variables & Placeholders**

This is where snippets get powerful:

* `$1`, `$2` → cursor positions (tab stops).
* `${1:default}` → placeholder with default text.
* `$0` → final cursor position.
* **Predefined variables**:

    * `TM_FILENAME` → current file name
    * `CURRENT_YEAR`, `CURRENT_DATE`, etc.
    * `CLIPBOARD` → paste clipboard contents

Example:

```json
"Console Log": {
  "prefix": "clg",
  "body": ["console.log('$1:', $1);"],
  "description": "Log a variable with label"
}
```

Typing `clg → Tab` expands to:

```js
console.log('myVar:', myVar);
```

---

### 5. **Multi-line snippets**

You can expand into entire boilerplates:

```json
"React Functional Component": {
  "prefix": "rfc",
  "body": [
    "import React from 'react';",
    "",
    "const ${1:ComponentName} = () => {",
    "  return (",
    "    <div>$2</div>",
    "  );",
    "};",
    "",
    "export default $1;"
  ],
  "description": "React functional component"
}
```

---

### 6. **Best practices**

* Keep prefixes short but unique (`cn-`, `cns`, `rfc`).
* Use placeholders (`$1`, `$2`) to jump between positions.
* Use descriptions so you know what snippet does when IntelliSense pops up.
* Store frequently used boilerplate (React components, API calls, loops).


---

Perfect 👍 You want the **overall picture** — like a full roadmap that covers both the **surface-level (flashy)** and the **deep-level (real pro)** VS Code tricks. Think of it as *everything a top dev should know in VS Code*.

Here’s the **big picture overview** 👇

---
