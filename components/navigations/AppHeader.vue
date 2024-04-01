<script setup>
// Small Screen Navbar
const navRoutesDrawerIsOpen = ref(false);

/**
 * Opens the routes drawer by setting the value of `navRoutesDrawerIsOpen` to true and
 * modifying the body's class list to hide vertical scroll and adjust the height of the body.
 */
function openroutesDrawer() {
  navRoutesDrawerIsOpen.value = true;
  document.body.classList.add("overflow-y-hidden", "h-screen");
  document.body.classList.remove("overflow-y-auto", "h-auto");
}

/**
 * Toggles the state of the navigation routes drawer
 * and updates the body classes   accordingly.
 */
function closeroutesDrawer() {
  navRoutesDrawerIsOpen.value = !navRoutesDrawerIsOpen.value;
  document.body.classList.add("overflow-y-auto", "h-auto");
  document.body.classList.remove("overflow-y-hidden", "h-screen");
}
// Routes links
const routesLinks = [
  {
    label: "Courses",
    to: "/",
    children: [
      [
        {
          label: "link1",
        },
        {
          label: "link2",
        },
      ],
    ],
  },
  {
    label: "plans",
    to: "/",
  },
  {
    label: "Business Service",
    to: "/business-service",
    children: [
      [
        {
          label: "link1",
        },
        {
          label: "link2",
        },
      ],
    ],
  },
  {
    label: "Learning Paths",
    to: "/",
  },
  {
    label: "Hiring",
    to: "/",
  },
  {
    label: "Articles",
    to: "/",
  },
  {
    label: "Get Certified",
    to: "/",
  },
  {
    label: "Events",
    to: "/",
    children: [
      [
        {
          label: "link1",
        },
        {
          label: "link2",
        },
      ],
    ],
  },
];
</script>

<template>
  <nav>
    <div class="flex items-center justify-between px-6 py-5 md:px-12">
      <div class="flex items-center gap-x-6">
        <NavbarToggleMenueButton @toggle-menu="openroutesDrawer" />
        <NavbarLogo />
      </div>

      <NavbarRoutes :routes="routesLinks" />
      <SmallScreensRoutesDrawer
        :routes="routesLinks"
        :routesDrawerIsOpen="navRoutesDrawerIsOpen"
        @close-menu="closeroutesDrawer"
      />

      <NavbarActionButtons />
    </div>
  </nav>
</template>
