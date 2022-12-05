<script>
  // we must to prepare code and remove html, body, head directives
  import "./../../node_modules/chota/dist/chota.css";
</script>

<style global>
  :root {
    --color-primary: #07A0EC;
  }
  :global(body) {
    font-family: "Mulish", "Segoe UI", "Helvetica Neue", sans-serif;
  }
  :global(input:invalid) {
    border: 2px red solid;
  }
  :global(.text-bold) {
    font-weight: bold;
  }
  :global(.click-pointer) {
    cursor: pointer;
  }
  .burger {
    display: none;
  }
  @media screen and (max-width: 480px) {
    .burger {
      display: block;
    }
  }
  @media screen and (max-width: 480px) {
    .nav-center,
    .nav-left,
    .nav-right {
      justify-content: center !important;
    }
    .nav {
      padding-bottom: 1rem;
      flex-direction: inherit;
      font-size: 1rem;
    }
    .nav .burger {
      padding-top: 2.25rem;
    }
    .nav-center {
      display: none;
    }
    .nav-center {
      position: absolute;
      top: 10rem;
      flex-direction: column;
      background: #000;
    }
    .nav .nav-center a {
      color: #fff;
    }
  }
</style>
