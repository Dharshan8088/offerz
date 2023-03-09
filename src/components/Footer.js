import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Tell us what you have in your mind by providing us a valuable feedback
        </p>
        <p className='footer-subscription-text'>
          Feedback Section
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send Feedback</Button>
          </form>
          <br></br>
          <h2>About Us</h2>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <Link to='/'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan urna velit, non euismod ipsum cursus et. Cras vel vestibulum nisl. Etiam ullamcorper, ex quis condimentum pulvinar, ligula lorem blandit enim, at consequat mi magna id ex. In consequat ullamcorper orci, vel lobortis sapien consequat sed. Duis volutpat semper justo ut eleifend. Mauris hendrerit risus ante, non fermentum metus consequat at. Fusce condimentum dui sed nibh convallis porttitor eu ac augue. In hendrerit placerat mauris, in maximus risus vestibulum vel. Morbi maximus tortor quis mauris lacinia auctor. Vestibulum sodales id mauris eu facilisis. Curabitur et lacus tellus. Donec hendrerit vitae nisi eget fermentum. Aenean quis vehicula orci, sed fringilla nulla.

In vel odio non velit sollicitudin convallis et ut nibh. Vivamus maximus turpis dignissim lectus blandit, vitae tempus libero ultricies. Vestibulum nec orci est. Ut bibendum porttitor enim, sed ultricies mauris lobortis rhoncus. Vestibulum aliquet enim non lorem feugiat, eget semper tellus rhoncus. Duis elit ex, semper placerat ex sit amet, malesuada auctor ipsum. Morbi facilisis leo non nulla iaculis malesuada vitae vel justo.

Donec viverra, libero id molestie volutpat, velit enim tincidunt nisl, vel semper quam augue volutpat lorem. Ut tempor quam a neque feugiat, in aliquet sapien tempor. Vestibulum egestas sapien lacus, tincidunt convallis ipsum mollis condimentum. Aliquam viverra blandit dolor nec luctus. Proin eu lobortis est. Curabitur sodales vulputate ante in molestie. Nullam euismod, augue vitae tincidunt accumsan, ligula lacus lobortis lectus, faucibus aliquam ex magna nec erat. In hac habitasse platea dictumst. Cras et erat tortor.

In luctus odio ex, in accumsan libero mollis ut. Nunc ultrices egestas risus. Phasellus commodo, neque vel laoreet molestie, mauris diam bibendum odio, quis aliquam nisi arcu ac neque. Nunc sed justo malesuada lectus scelerisque suscipit. In diam nisi, pulvinar nec dolor sed, congue laoreet turpis. Phasellus quis mi et lectus tempus tempus vitae eget lectus. Phasellus porta lobortis mauris, non consectetur mauris convallis sed. Pellentesque nunc ligula, porttitor sed viverra at, congue sit amet libero. Vivamus a lacus sed nisl congue viverra. Curabitur nec turpis nulla. Donec elementum turpis risus, a malesuada leo condimentum nec. Maecenas cursus metus vitae risus laoreet, eget dignissim diam rutrum.

Nam faucibus porttitor ante sed commodo. Proin tincidunt, velit in lobortis lobortis, felis lacus lacinia sem, a sollicitudin mi justo sed elit. Nulla molestie aliquam leo eu tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sagittis dolor at enim varius, nec blandit nibh efficitur. Aenean interdum imper</Link>
          </div>
          
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ABDG
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <small class='website-rights'>ABDG © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
