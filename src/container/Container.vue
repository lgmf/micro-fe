<template>
  <fragment>
    <header class="header">
      <a class="brand"> Micro FE </a>

      <nav class="navbar">
        <ul class="nav-links">
          <li class="item">
            <a class="link" @click="loadApp('counter')"> counter </a>
          </li>
          <li class="item">
            <a class="link" @click="loadApp('increment-counter')">
              increment counter
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <div id="router-view" ref="routerView" />
    </main>
  </fragment>
</template>

<script src="./Container.js"></script>
