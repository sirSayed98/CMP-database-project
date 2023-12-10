const navBar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a
    class="navbar-brand"
    href="/"
  >Company</a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div
    class="collapse navbar-collapse"
    id="navbarSupportedContent"
  >
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="/Employee/list.html"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Employee
        </a>
        <ul class="dropdown-menu">
          <li><a
              class="dropdown-item"
              href="/Employee/create.html"
            >Create Employee</a></li>

          <hr class="dropdown-divider">
      </li>
      <li><a
          class="dropdown-item"
          href="/Employee/list.html"
        >List Employees</a></li>
    </ul>
    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="/Department/list.html"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Department
      </a>
      <ul class="dropdown-menu">
        <li><a
            class="dropdown-item"
            href="/Department/create.html"
          >Create Department</a></li>

        <hr class="dropdown-divider">
    </li>
    <li><a
        class="dropdown-item"
        href="/Department/list.html"
      >List Departments</a></li>
    </ul>

    </li>
    </ul>
  </div>
</div>
</nav>

`
document.addEventListener('DOMContentLoaded', event => {
  document.getElementById('nav').innerHTML = navBar
})
