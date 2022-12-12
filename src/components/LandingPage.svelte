<script>
  import Carousel from "svelte-carousel";
  import "./Styles.svelte";
  import {
    Icon,
    Container,
    Row,
    Col,
    Button,
  } from "svelte-chota";
  import Loading from "./Loading.svelte";
  import { mdiMenu, mdiTwitter, mdiSend, mdiShield, mdiAccountAlert, mdiAccount, mdiHandCoin, mdiBackupRestore, mdiGlobeModel, mdiNetwork, mdiDns, mdiPalette, mdiHomeAnalytics, mdiLock, mdiRecycleVariant } from "@mdi/js";
  export let loaded;

  const previewWeb = [
    "/assets/img/screens/quick_acces_pincode.png",
    "/assets/img/screens/popup.png",
    "/assets/img/screens/invoice_by_qr.png",
    "/assets/img/screens/multiaccount.png",
    "/assets/img/screens/send_tx_1.png",
    "/assets/img/screens/send_tx_2.png",
    "/assets/img/screens/send_tx_3.png",
    "/assets/img/screens/send_tx_4.png",
    "/assets/img/screens/import_tokens.png",
    "/assets/img/screens/request_permissions.png",
    "/assets/img/screens/web3_DApp.png",
  ];
  const installations = [
    { name: "chrome", url: "https://chrome.google.com/webstore/detail/xton-wallet/cjookpbkjnpkmknedggeecikaponcalb" },
    { name: "edge", url: "https://docs.xtonwallet.com/installation" },
    { name: "firefox", url: "https://docs.xtonwallet.com/installation" },
    { name: "safari", url: "https://docs.xtonwallet.com/installation" },
    { name: "opera", url: "https://docs.xtonwallet.com/installation" },
  ];
  const showMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display != "block") {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "";
    }
  };
</script>

<style lang="scss">
  .brand img {
    width: 100px;
    height: auto;
    max-height: initial;
  }
  .nav-center a {
    white-space: nowrap;
  }
  :global(.padding-top-10) {
    padding-top: 10rem;
  }
  .verify-code {
    width: 75%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #5f6e82;
    padding-top: 15rem;
  }
  .browser {
    width: 150px;
    height: auto;
  }
  :global(.dark-background) {
    color: #ffffff;
    background: linear-gradient(0deg, #232328, #343437 101.47%);
    .nav a,
    .nav .brand {
      color: #ffffff;
    }
  }
  .features .card,
  .services .card {
    background: #f7f9fb;
    color: #000;
    height: 100%;
  }
  :global(.features-cards header) {
    display: flex;
    flex-direction: inherit;
  }
  :global(.features-cards header svg) {
    color: var(--color-primary);
  }
  :global(.features-cards header h4) {
    padding-left: 1rem;
  }
  :global(.features-cards, .services-cards) {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
  :global(.main-container) {
    min-height: 87vh;
    background: linear-gradient(65deg, #ffffff 0, #f7f9fb 30%, #0088cc 100%);
  }
  :global(.margin-0) {
    margin: 0;
  }
  :global(.carousel-block) {
    padding-top: 4rem;
    margin-left: 4rem;
  }
  .main-title {
    font-weight: bold;
  }
  :global(.installation) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  :global(.subscription) {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
  @media screen and (max-width: 480px) {
    .verify-code {
      padding-top: 2rem;
    }
    :global(.padding-top-10) {
      padding-top: 2rem;
    }
    :global(.carousel-block) {
      margin-left: 0rem;
    }
  }
</style>

{#if $loaded}
  <nav class="nav">
    <div class="nav-left">
      <div class="burger" on:click={(event) => showMenu()}>
        <Icon src={mdiMenu} size="3" />
      </div>
      <a href="/" class="brand">
        <img
          alt="XTON wallet"
          title="XTON wallet"
          src="/assets/img/icon-128.png" />
      </a>
    </div>

    <div class="nav-center" id="mobileMenu">
      <a href="https://docs.xtonwallet.com">Documentation</a>
      <a href="https://demopage.xtonwallet.com">Web3 demo page</a>
      <a href="#features">Features</a>
      <a href="#services">Services</a>
      <a href="#subscribe">Subscribe</a>
    </div>

    <div class="nav-right">
      <Button primary outline><a href="#installation">Installation</a></Button>
    </div>
  </nav>

  <div class="main-container">
    <Container>
      <Row>
        <Col size="7" class="padding-top-10 text-center">
          <h1 class="main-title">
            The most functional wallet and gateway to Web3 apps for TON
            blockchain
          </h1>
          <h5>
            Dive into TON blockchain with state-of-art features, such of: TON
            proxy, TON sites, Jetton, NTF, DApp, and
            <a href="#features">etc</a>.
          </h5>
          <p class="verify-code">
            The wallet is non-custodial. Nobody has access to your funds,
            browser history, or any other private information. We don't track
            any actions and the source code is available on
            <a href="http://github.com/xtonwallet/web-extension">GitHub</a>.
          </p>
        </Col>
        <Col size="4" class="margin-0 carousel-block">
          <Carousel
            autoplay
            autoplayDuration={5000}
            autoplayProgressVisible
            pauseOnFocus>
            {#each previewWeb as imagesource}
              <img alt="XTON wallet" title="XTON wallet" src={imagesource} />
            {/each}
          </Carousel>
        </Col>
      </Row>
    </Container>
  </div>

  <div class="dark-background features">
    <Container>
      <Row class="is-center">
        <h1 id="features">Features</h1>
      </Row>
      <Row class="features-cards">
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiShield} size="2" /><h4>Non-custodial</h4>
            </header>
            <p>
              Non-custodial crypto wallets give you complete control of your
              keys and therefore your funds.
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiAccountAlert} size="2" /><h4>No track</h4>
            </header>
            <p>
              We don't use analytics tools and proxy Smart contract to track
              user actions. We don't collect any anonymous information.
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiAccount} size="2" /><h4>Multiple accounts</h4>
            </header>
            <p>
              You can have as many accounts how you need. It is very comfortable
              to have separate accounts.
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiHandCoin} size="2" /><h4>Multiple tokens</h4>
            </header>
            <p>
              The wallet supports Jetton standard. You can import tokens or add
              famous tokens from the list.
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiBackupRestore} size="2" /><h4>Own backup format</h4>
            </header>
            <p>
              Our team created the own backup format, that allows storing access
              to the account in state-of-art way. Forget about seed phrase.
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiGlobeModel} size="2" /><h4>Web3 DApp</h4>
            </header>
            <p>
              You can interact with DApp in Web3 style. The wallet has
              permissions system that will avoid any attempt to track you from
              DApp side.
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiNetwork} size="2" /><h4>TON proxy</h4>
            </header>
            <p>
              Use free TON proxy service to explore websites on ".ton" domains
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiDns} size="2" /><h4>TON DNS</h4>
            </header>
            <p>Send payments by TON DNS addresses</p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiPalette} size="2" /><h4>Dark / white themes</h4>
            </header>
            <p>
              Wallet supports color themes for comfortable work in different
              times of day
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiHomeAnalytics} size="2" /><h4>Statistics</h4>
            </header>
            <p>
              You can track all your spending and earnings right in the wallet
              web-extension
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiLock} size="2" /><h4>Autologout feature</h4>
            </header>
            <p>
              If by some reason you will forget to logout, the wallet will be
              lock after some idle time. This time can be adjusted on the
              settings page.
            </p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <Icon src={mdiRecycleVariant} size="2" /><h4>Continuing integration</h4>
            </header>
            <p>Right now we are working on some new useful features.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>

  <Container>
    <Row class="is-center">
      <h1 id="installation">Installation</h1>
    </Row>
    <Row class="is-center">
      <h5>Supported by all modern browsers</h5>
    </Row>
    <Row class="installation">
      {#each installations as item}
        <Col class="is-center">
          <a href={item.url}>
            <img
              class="browser"
              alt="Download XTON wallet for {item.name}"
              title="Download XTON wallet for {item.name}"
              src="/assets/img/{item.name}.png" />
          </a>
        </Col>
      {/each}
    </Row>
  </Container>

  <div class="dark-background services">
    <Container>
      <Row class="is-center">
        <h1 id="services">Services</h1>
      </Row>
      <Row class="services-cards">
        <Col size="4">
          <div class="card">
            <header>
              <h4>Create own Jetton</h4>
            </header>
            <img
              alt="XTON wallet minter"
              title="XTON wallet minter"
              src="/assets/img/services/minter.jpeg" />
            <br/>
            <p>Mint own Jetton on the official <a target="_blank" href="https://minter.ton.org/?utm_source=xtonwallet.com">TON.org Minter</a></p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <h4>Create own NFT</h4>
            </header>
            <img
              alt="XTON wallet getgems"
              title="XTON wallet getgems"
              src="/assets/img/services/getgems.jpeg" />
            <br/>
            <p>Create, buy, sell NFT's on <a target="_blank" href="https://getgems.io/?utm_source=xtonwallet.com">NFT marketplace</a></p>
          </div>
        </Col>
        <Col size="4">
          <div class="card">
            <header>
              <h4>Use Dex</h4>
            </header>
            <img
              alt="XTON wallet dedust"
              title="XTON wallet dedust"
              src="/assets/img/services/dedust.jpeg" />
            <br/>
            <p>Swap Jetton's quickly and safely on <a target="_blank" href="http://dedust.io/?utm_source=xtonwallet.com">Dedust Dex</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>

  <Container>
    <Row class="is-center">
      <h1 id="subscribe">Subscribe</h1>
    </Row>
    <Row class="is-center">
      <h5>To receive information about updates and new services</h5>
    </Row>
    <Row class="subscription">
      <Col class="is-center">
        <Button primary outline>
          <a href="https://twitter.com/xtonwallet">
            <Icon src={mdiTwitter} size="3" />
            Twitter
          </a>
        </Button>
      </Col>
      <Col class="is-center">
        <Button primary outline>
          <a href="https://t.me/xtonwallet">
            <Icon src={mdiSend} size="3" />
            Telegram
          </a>
        </Button>
      </Col>
    </Row>
  </Container>

  <div class="dark-background">
    <footer class="nav">
      <div class="nav-left">
        <a href="/" class="brand">
          <img
            alt="XTON wallet"
            title="XTON wallet"
            src="/assets/img/icon-128.png" />
        </a>
      </div>

      <div class="nav-center">
        <a href="https://docs.xtonwallet.com">Documentation</a>
        <a href="https://demopage.xtonwallet.com">Web3 demo page</a>
        <a href="#services">Services</a>
        <a href="#features">Features</a>
        <a href="#subscribe">Subscribe</a>
        <a href="https://docs.xtonwallet.com/privacy.html">Privacy policy</a>
      </div>

      <div class="nav-right">
        <Button primary outline>
          <a href="#installation">Installation</a>
        </Button>
      </div>
    </footer>

    <Container>
      <Row class="is-center footer">
        <Col size="2" class="is-center">2021-{new Date().getFullYear()}</Col>
        <Col size="8" class="is-center">
          {'Made by'}
          &nbsp;<a
            target="_blank"
            class="footer-made"
            href="{"#"}">{'XTON wallet team'}</a>&nbsp;
          {'with'}
          &#10084;&#65039;
        </Col>
        <Col size="2" class="is-center"><a href="/">{'Support'}</a></Col>
      </Row>
    </Container>
  </div>
{:else}
  <Container>
    <Loading />
  </Container>
{/if}
