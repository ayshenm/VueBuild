<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <br />
    <RouterLink to="/about">Go to About</RouterLink>
    <br />
    <RouterLink to="/users">Go to Users</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
