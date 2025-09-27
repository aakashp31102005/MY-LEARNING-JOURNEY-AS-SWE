Of course. Here are practical tasks to master Next.js file-based routing, structured from foundational to advanced. These tasks focus on concepts and structure, not code.

---

### **Level 1: Foundation & Basic Routing**

**Task 1: Project Scaffolding**
*   Create a new Next.js project (using the App Router).
*   Build the following page routes solely by creating folders and `page.tsx` files. Your goal is to have these URLs work:
    *   `/` (Home)
    *   `/about`
    *   `/blog`
    *   `/contact`

**Task 2: Creating a Shared Layout**
*   Implement a root layout (`app/layout.tsx`) that includes a `<header>` with a navigation bar and a `<footer>`.
*   The navigation bar should contain links to all the pages you created in Task 1.
*   Verify that the header and footer appear on every page without needing to import them into each page.

**Task 3: Nested Layouts**
*   Create a new section for user settings at `/settings`.
*   Inside `/settings`, create two sub-pages: `/settings/profile` and `/settings/account`.
*   Create a layout specifically for the `/settings` segment. This layout should render a sidebar navigation menu (with links to Profile and Account) and then the child page content next to it.

---

### **Level 2: Dynamic Routes & Organization**

**Task 4: Dynamic Blog Posts**
*   Create a dynamic route for individual blog posts: `app/blog/[slug]/page.tsx`.
*   The page should be able to handle any `slug` (e.g., `/blog/my-first-post`, `/blog/learning-nextjs`).
*   Access the `slug` parameter from the page's props and display it on the page.

**Task 5: Catch-All Routes**
*   Create a documentation section with a catch-all route: `app/docs/[[...slug]]/page.tsx`.
*   Test that this route handles:
    *   `/docs` (should show a main documentation index)
    *   `/docs/getting-started`
    *   `/docs/api/reference/use-state`

**Task 6: Using Route Groups for Organization**
*   Reorganize your pages using route groups.
*   Create an `(auth)` group containing `login/page.tsx` and `register/page.tsx` (URLs should remain `/login` and `/register`).
*   Create a `(marketing)` group containing your `about`, `blog`, and `contact` pages.
*   Observe that the URL paths do not include `(auth)` or `(marketing)`.

---

### **Level 3: Advanced UI & Loading States**

**Task 7: Loading Skeletons**
*   Add a `loading.tsx` file to your blog directory.
*   This component should render a simple skeleton UI (e.g., a grey block for an image, placeholder lines for text).
*   Use the `delay` function in your `blog/[slug]/page.tsx` to simulate a slow network request and confirm the loading skeleton appears.

**Task 8: Error Handling**
*   Intentionally throw an error inside your `blog/[slug]/page.tsx` component for a specific slug (e.g., if `slug === 'invalid-post'`).
*   Create an `error.tsx` file in the `blog/[slug]` directory that catches this error and displays a user-friendly message and a button to try to recover.
*   Create a `not-found.tsx` file in the `blog` directory. Update your page to call `notFound()` for a different specific slug and confirm the custom 404 page renders.

**Task 9: Parallel Routes (Conceptual Planning)**
*   **Plan** the folder structure for a dashboard that uses parallel routes.
*   The dashboard at `/dashboard` should simultaneously display three independent sections: a main feed (`@feed`), a notifications panel (`@notifications`), and a user analytics panel (`@analytics`).
*   Sketch out the required folder structure within `app/dashboard/` and describe what each slot would contain.

---

### **Level 4: Mastery & Real-World Application**

**Task 10: Intercepted Routes for Modals (Conceptual)**
*   **Plan** the file structure to implement a photo gallery where clicking a photo in a feed opens it in a modal *without* navigating away from the feed page. The modal should have its own URL for direct sharing.
*   You need:
    1.  A page to display the feed (`/feed/page.tsx`).
    2.  A page to display a photo on its own page (`/feed/photo/[id]/page.tsx`).
    3.  An intercepted route to show the same photo component inside a modal *over* the feed when navigated to client-side.
*   Determine the correct intercepting pattern (`(.)`, `(..)`, etc.) and the folder name for the slot.

**Task 11: Private Folders for Colocation**
*   Create a `_components` private folder within your blog directory.
*   Move any blog-specific UI components (e.g., a `BlogCard`, `AuthorBio`) into this folder.
*   Create a `_lib` private folder within blog and add a utility function (e.g., `formatDate`).
*   Import and use these from within your blog pages. Confirm that visiting `/_components` or `/_lib` returns a 404 error.

**Task 12: Multiple Root Layouts**
*   Create a second root layout for an authenticated area.
*   Remove the root `app/layout.tsx`.
*   Create a `(public)/(marketing)/layout.tsx` with a standard layout. Place your home, about, blog pages inside this group.
*   Create an `(app)/dashboard/layout.tsx` with a completely different layout (e.g., with a sidebar). Place a simple dashboard page inside this group.
*   Ensure each root layout properly defines its own `<html>` and `<body>` tags. Verify that navigating from `/` to `/dashboard` changes the entire layout structure.