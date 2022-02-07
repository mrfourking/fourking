<script>
  export let href, target;
</script>

<a class="link" href={href} target={target ? target : ``}>
  <slot />
</a>

<style>
  .link {
    position: relative;

    transition: color 0.2s ease-in-out;

    font-size: 1.5em;
    text-decoration: none;

    outline: none;
  }

  .link::after {
    content: "";
    position: absolute; 
    bottom: -2px;
    left: 0;

    width: 0;
    height: 0.1em;
    background-color: var(--color-green);

    transition: width 0.2s ease-in-out;
  }

  .link:hover {
    color: var(--color-green);
  }

  .link:focus {
    color: var(--color-green);
  }

  .link:hover::after {
    width: 100%;
  }

  .link:active {
    opacity: 0.6;
  }
</style>
