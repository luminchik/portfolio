/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Lumin
            <strong></strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">Community builder</span>
          <span className="line" style={{ marginTop: '5px' }}>
            <span className="color">&</span> code crafter
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="https://t.me/lumin_crypto" target="_blank" rel="noopener noreferrer" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};


/***********************
  About Component
 ***********************/

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Lumin.</h4>
            <p>
              I'm a <span style={{ color: '#d8cc3c' }}>coder, community moderator, and ambassador</span> actively contributing to various crypto projects.
            </p>
            <p>
              I thrive on <span style={{ color: '#d8cc3c' }}>solving complex problems</span> and building clean, user-friendly interfaces. My passion for <span style={{ color: '#d8cc3c' }}>blockchain and decentralized systems</span> drives me to stay curious and constantly learn. Whether it's writing efficient code or helping grow communities, I enjoy being at the <span style={{ color: '#d8cc3c' }}>intersection of technology and collaboration</span>.  
            </p>
            <p>
              In my free time, I enjoy listening to music — it helps me recharge, find inspiration, and stay connected to creativity beyond the screen.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a developer.</h4>
            <p>
            I enjoy building <span style={{ color: '#d8cc3c' }}>smart, automated tools</span> using Python and JavaScript. 
            I mainly help cryptocurrency and Web3 projects <span style={{ color: '#d8cc3c' }}>automate processes on Discord servers</span>, from custom bots and moderation tools to community games
            </p>
            <p>
            I love solving recurring problems with <span style={{ color: '#d8cc3c' }}>clean, reusable code</span>. Whether it's managing community workflows or increasing user engagement through automation, 
            I strive to make things <span style={{ color: '#d8cc3c' }}>faster, smoother, and more scalable</span>.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a community builder.</h4>
            <p>
            Beyond coding, I'm deeply involved in the <span style={{ color: '#d8cc3c' }}>Web3 ecosystem</span> as a moderator and ambassador across several blockchain communities. 
            I help <span style={{ color: '#d8cc3c' }}>organize events, engage users, and support onboarding</span> — making complex technologies more accessible.
            </p>
            <p>
            I believe in the <span style={{ color: '#d8cc3c' }}>power of community</span> as much as the power of code.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node'
  };

  const websiteLink = props.websiteLink || '#';
  const twitterLink = props.twitterLink || '#';
  
  // State to control expanding/collapsing details
  const [expanded, setExpanded] = React.useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="project">
      <div className="project-link">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </div>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>
        <div className="project-info">
          {props.children}
        </div>
        {props.detailedContent && (
          <div className="project-description collapsed">
            <button className="expand-btn" onClick={toggleExpand}>
              {expanded ? 'Show less' : 'Show more details'}
            </button>
            <div className={`detailed-content ${expanded ? 'expanded' : ''}`}>
              {props.detailedContent}
            </div>
          </div>
        )}
        <div className="buttons">
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            Twitter <i className="fas fa-external-link-alt" />
          </a>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            Website <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Portfolio</h3>
          <p className="separator" />
        </div>
        <div className="projects-wrapper">
          <Project
            title="Aethir"
            img={'https://media.discordapp.net/attachments/1282285166621884488/1369572534105931776/OxI0Gu7.jpg?ex=681c5951&is=681b07d1&hm=409e9c20ef1b9b6a4e8f6414477cc037fe9f68ea1756054f52835daa1ef10ad7&=&width=445&height=445'}
            tech="web3 blockchain"
            twitterLink="https://x.com/AethirCloud"
            websiteLink="https://aethir.com/"
            detailedContent={
              <div>
                <ul>
                  <li>Organize and host weekly poker tournaments every Saturday for community members</li>
                  <li>Coordinate tournaments across various games to engage server participants</li>
                  <li>Developed a Discord bot for the Riddle game to enhance community interaction</li>
                  <li>Create and manage community events to increase engagement and retention</li>
                  <li>Provide community support and moderation to maintain a positive environment</li>
                </ul>
              </div>
            }
          >
            <small>
              <strong>Role:</strong> Senior Ambassador
            </small>
            <p>
              Building scalable decentralized cloud infrastructure (DCI) for gaming and AI solutions.
            </p>
          </Project>
          
          <Project
            title="Sahara AI"
            img={'https://media.discordapp.net/attachments/1282285166621884488/1369581789663727698/cifXkwd.jpg?ex=681c61f0&is=681b1070&hm=3f71e73ca146b1b4dc16a2f26fe91103bd7c29ff6797e8748b899def4ccb32d3&=&width=445&height=445'}
            tech="web3 blockchain"
            twitterLink="https://x.com/SaharaLabsAI"
            websiteLink="https://saharalabs.ai/"
            detailedContent={
              <div>
                <ul>
                  <li>Assist in automating community operations and engagement processes</li>
                  <li>Developed a website and Discord bot for automatic point distribution to participants</li>
                  <li>Created a points sender system with source code available on <a href="https://github.com/luminchik/saharapointssender" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li>Implemented analytics solutions to track community engagement</li>
                  <li>Built tools to streamline community management workflows</li>
                </ul>
              </div>
            }
          >
            <small>
              <strong>Role:</strong> Contributor
            </small>
            <p>
            Create and monetize AI, collaboratively with verifiable on-chain provenance. 
            </p>
          </Project>
          
          <Project
            title="Pharos"
            img={'https://media.discordapp.net/attachments/1282285166621884488/1369581789886156841/wUQhFri.jpg?ex=681c61f0&is=681b1070&hm=611bb0b2a34a962131628087a170e03bd96e66ba89e8bf2666c1d26b85e9fe70&=&width=445&height=445'}
            tech="web3 blockchain"
            twitterLink="https://x.com/pharos_network"
            websiteLink="https://pharosnetwork.xyz/"
          >
            <small>
              <strong>Role:</strong> Contributor
            </small>
            <p>
            Fastest EVM-Compatible Layer-1
            </p>
          </Project>
          
          <Project
            title="ZkFair"
            img={'https://media.discordapp.net/attachments/1282285166621884488/1369572533686370304/G4zWD4K.jpg?ex=681c5951&is=681b07d1&hm=ac40ef90a7bc68b62e5d45ca766d38b45d68fc2ca3395e64d3b6648c65b52b3f&=&width=445&height=445'}
            tech="web3 blockchain"
            twitterLink="https://x.com/ZKFCommunity"
            websiteLink="https://zkfair.io/"
          >
            <small>
              <strong>Role:</strong> Community Moderator
            </small>
            <p>
              Technologies: Polygon CDK, Celestia DA, Lumoz RaaS
            </p>
          </Project>
          
          <Project
            title="Lumoz"
            img={'https://media.discordapp.net/attachments/1282285166621884488/1369572532826669076/iTuTwvA.jpg?ex=681c5951&is=681b07d1&hm=d4b34abf47bfb3656eac3463d5835e05e89613edb58c94de89b510d865155320&=&width=445&height=445'}
            tech="web3 blockchain"
            twitterLink="https://x.com/LumozOrg"
            websiteLink="https://lumoz.org/"
          >
            <small>
              <strong>Role:</strong> Community Moderator
            </small>
            <p>
              Three-layer platform with hybrid consensus PoS + PoW and ZK-RaaS (zkRollup as a Service).
            </p>
          </Project>
          
          <Project
            title="Minima"
            img={'https://media.discordapp.net/attachments/1282285166621884488/1369572533128531989/jooaGIG.png?ex=681c5951&is=681b07d1&hm=404b316a7ca0b0f113bf598dca030212cb836138ea2d820edff841b4cf4c87bd&=&width=445&height=445'}
            tech="web3 blockchain"
            twitterLink="https://minima.global/"
            websiteLink="https://minima.global/"
          >
            <small>
              <strong>Role:</strong> Grand Ambassador
            </small>
            <p>
              The only truly decentralized Layer 1 blockchain.
            </p>
          </Project>
          
          <Project
            title="Wayru Network"
            img={'https://media.discordapp.net/attachments/1282285166621884488/1369572533438779402/Hg1JgyZ.jpg?ex=681c5951&is=681b07d1&hm=8cdf12418ac68df484472b862f69bbea7b5e342efd0a8a53351df70d6769b58a&=&width=445&height=445'}
            tech="web3 blockchain"
            twitterLink="https://x.com/WayruNetwork"
            websiteLink="https://www.wayru.io/"
          >
            <small>
              <strong>Role:</strong> Community Moderator
            </small>
            <p>
              Community-managed decentralized internet network.
            </p>
          </Project>
          
          <Project
            title="TaskOn"
            img={'https://media.discordapp.net/attachments/1282285166621884488/1369572532512100362/BDC8Fam.jpg?ex=681c5951&is=681b07d1&hm=5b076aac1ce1338ea0d1bb1112fb8800fa3c388a3dcfed677043e53533295474&=&width=445&height=445'}
            tech="web3 blockchain"
            twitterLink="https://x.com/taskonxyz"
            websiteLink="https://taskon.xyz/"
          >
            <small>
              <strong>Role:</strong> Helping Hand
            </small>
            <p>
              Web3 task platform for creation, collaboration, and rewards.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};



/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="https://x.com/lumincrypto"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {' '}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/luminchik"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://medium.com/@lumincrypto"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Medium Profile"
      >
        {' '}
        <i className="fab fa-medium" />
      </a>
    </div>
  );
};



/***********************
  Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Projects />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
