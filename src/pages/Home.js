import React from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { VelocityTransitionGroup } from 'velocity-react';
import QueueAnim from 'rc-queue-anim';

import classNames from 'classnames';

import styles from './Home.module.scss';

import LOGO from '../assets/1hz_white.svg';
import LOGO_DARK from '../assets/1hz.svg';

import ALBUMS from '../assets/albums';

import IconBandcamp from '../assets/i/bandcamp';
import IconSoundcloud from '../assets/i/soundcloud';
import IconTwitter from '../assets/i/twitter';
import IconWeibo from '../assets/i/weibo';

import IconAudio from '../assets/i/audio';
import IconVideo from '../assets/i/video';

import IconLock from '../assets/i/lock';
import IconUnlock from '../assets/i/unlock';
import IconCheck from '../assets/i/check';

import QRCODE from '../assets/tb-qrcode.png';
import GUGUGU from '../assets/gugugu.jpg';

const sortedAlbums = Object.values(ALBUMS).sort((a, b) => {
  if (a.releaseDate < b.releaseDate) {
    return 1;
  } else {
    return -1;
  }
});

const defaultGradientColors = ['#242627', '#121415'];

const Home = (props) => {
  const [, showAlbum, albumId] = props.location.pathname.split('/');
  const [state, setState] = React.useState({
    hoveredAlbum: null,
    selectedAlbum: null,
  });

  React.useEffect(() => {
    setState({
      selectedAlbum: showAlbum
        ? sortedAlbums.find(
            (alb) => alb.id.toLowerCase() === albumId.toLowerCase()
          )
        : null,
    });
  }, [albumId, showAlbum]);

  const currentAlbum = state.hoveredAlbum || state.selectedAlbum;
  const mainColor =
    (state.hoveredAlbum || state.selectedAlbum)?.gradientColors?.[0] ||
    defaultGradientColors[0];
  const secondaryColor =
    (state.hoveredAlbum || state.selectedAlbum)?.gradientColors?.[1] ||
    defaultGradientColors[1];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img className={styles.headerLogo} src={LOGO} alt="1Hz Music" />

        {/* <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
        </nav> */}
      </header>

      <main className={styles.main}>
        <section
          className={classNames(styles.albumGallery, {
            [styles.hasSelection]: state.selectedAlbum,
          })}
          style={{
            backgroundColor: defaultGradientColors[0],
          }}
        >
          <h1>Albums</h1>

          <QueueAnim type="alpha" duration={500} ease="easeInOutSine">
            {currentAlbum?.jumbotron ? (
              <div
                key={`jumbotron-${currentAlbum.id}`}
                className={styles.albumBackgroundJumbotron}
                style={{
                  backgroundImage: `url(${currentAlbum.jumbotron})`,
                }}
              />
            ) : (
              <div key="gradient" className={styles.albumBackgroundGradient}>
                <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient
                      id="albumBackgroundGradient"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="0%" stopColor={mainColor} />
                      <stop offset="1000%" stopColor={secondaryColor} />
                    </linearGradient>
                  </defs>
                  <rect
                    x={0}
                    y={0}
                    width={100}
                    height={100}
                    fill="url('#albumBackgroundGradient')"
                  />
                </svg>
              </div>
            )}
          </QueueAnim>

          <PerfectScrollbar
            className={styles.albumGalleryScroll}
            component="section"
          >
            {sortedAlbums.map((alb) => {
              const isReleased = Date.now() >= alb.releaseDate;
              const isUnlocked = alb.locked === false;
              const isSelected = alb.id === state.selectedAlbum?.id;

              return (
                <div
                  key={alb.id}
                  className={classNames(styles.album, {
                    [styles.isSelected]: isSelected,
                  })}
                >
                  <Link
                    to={`/album/${alb.id.toLowerCase()}`}
                    onMouseOver={() =>
                      void setState({ ...state, hoveredAlbum: alb })
                    }
                    onMouseLeave={() =>
                      void setState({ ...state, hoveredAlbum: null })
                    }
                    onFocus={() =>
                      void setState({ ...state, hoveredAlbum: alb })
                    }
                    onBlur={() =>
                      void setState({ ...state, hoveredAlbum: null })
                    }
                  >
                    <img className={styles.albumCover} src={alb.cover} alt="" />

                    <div className={styles.albumMeta}>
                      <div className={styles.albumName}>{alb.title}</div>
                      <div className={styles.albumReleaseStatus}>
                        <span
                          className={classNames('tag', {
                            [styles.isReleased]: isReleased,
                          })}
                        >
                          {isReleased ? (
                            <IconCheck />
                          ) : isUnlocked ? (
                            <IconUnlock />
                          ) : (
                            <IconLock />
                          )}
                          {isReleased
                            ? 'Released'
                            : isUnlocked
                            ? 'Unlocked'
                            : 'Locked'}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </PerfectScrollbar>

          <VelocityTransitionGroup
            className={classNames(styles.albumContentWrapper, {
              [styles.isVisible]: state.selectedAlbum,
            })}
            enter={{
              animation: 'slideDown',
              duration: 140,
              delay: 140,
              style: {
                height: null,
              },
            }}
            leave={{
              animation: 'slideUp',
              duration: 200,
            }}
          >
            {state.selectedAlbum ? (
              <div className={styles.info}>
                <svg
                  className={styles.slopeTriangle}
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <polygon points="0 0 100 100 0 100" fill="currentColor" />
                </svg>

                <section className={styles.albumContent}>
                  <Link className={styles.closeToggle} to="/" title="Close">
                    x
                  </Link>

                  <section className={styles.albumBasicInfo}>
                    <h1>{state.selectedAlbum.title}</h1>
                    <div className={styles.infoReleaseDate}>
                      <span
                        style={{
                          fontSize: '1.25rem',
                          verticalAlign: 'middle',
                        }}
                      >
                        {do {
                          /** @type {Date} */
                          const rDate = state.selectedAlbum.releaseDate;
                          const isReleased = Date.now() >= rDate;
                          const isUnlocked =
                            state.selectedAlbum.locked === false;
                          const rDateFormatted = [
                            rDate.getFullYear(),
                            rDate.getMonth() + 1,
                            rDate.getDate(),
                          ].join('/');

                          if (isReleased) {
                            `Released on ${rDateFormatted}`;
                          } else {
                            <span style={{ color: '#ccc' }}>
                              <span className="tag">
                                {isUnlocked ? <IconUnlock /> : <IconLock />}
                                {isUnlocked ? 'Unlocked' : 'Locked'}
                              </span>
                              &nbsp;Will be released on {rDateFormatted}
                            </span>;
                          }
                        }}
                      </span>
                    </div>
                  </section>

                  <section className={styles.layout}>
                    <div className={styles.albumTracks}>
                      <h2>Tracks</h2>
                      <table className={styles.trackTable}>
                        <colgroup width="10" />
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>
                              <div>Title</div>
                              <div className={styles.trackComposer}>Artist</div>
                            </th>
                            <th>Genre</th>
                            <th>Duration</th>
                          </tr>
                        </thead>

                        <tbody>
                          {Array.isArray(state.selectedAlbum.tracks)
                            ? state.selectedAlbum.tracks.map((track, index) => {
                                const [dm, ds] = track.duration;

                                return (
                                  <tr>
                                    <td>{track.index || index + 1}</td>
                                    <td>
                                      <div>{track.title}</div>
                                      <div className={styles.trackComposer}>
                                        {track.artist}
                                      </div>
                                    </td>
                                    <td>{track.genre}</td>
                                    <td>
                                      {`${String(dm)}'${String(ds).padStart(
                                        2,
                                        '0'
                                      )}"`}
                                    </td>
                                  </tr>
                                );
                              })
                            : null}
                        </tbody>
                      </table>
                    </div>

                    <div className={styles.albumRes}>
                      <h2>Resources</h2>
                      <ul>
                        {Array.isArray(state.selectedAlbum.resources) &&
                        state.selectedAlbum.resources.length ? (
                          state.selectedAlbum.resources.map((res) => (
                            <li key={res.href}>
                              <a
                                href={res.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {do {
                                  if (res.type === 'video') {
                                    <IconVideo />;
                                  } else if (res.type === 'audio') {
                                    <IconAudio />;
                                  }
                                }}
                                <span>{res.title}</span>
                              </a>
                            </li>
                          ))
                        ) : (
                          <li>Oops, nothing's here...</li>
                        )}
                      </ul>
                    </div>
                  </section>
                </section>
              </div>
            ) : null}
          </VelocityTransitionGroup>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="row justify-start">
          <div
            className={classNames(styles.footerLogoWrapper, 'col flex-none')}
          >
            <img
              className={styles.footerLogo}
              src={LOGO_DARK}
              alt="1Hz Music"
            />
          </div>

          <div className="col">
            <h6>External</h6>
            <ul>
              <li>
                <a
                  href="https://1hzmusic.bandcamp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBandcamp />
                  bandcamp
                </a>
              </li>

              <li>
                <a
                  href="https://soundcloud.com/ovjffjrm6bqb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconSoundcloud />
                  soundcloud (@Daily)
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/daily197"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTwitter />
                  twitter (@daily197)
                </a>
              </li>

              <li>
                <a
                  href="https://weibo.com/u/5904651688"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWeibo />
                  Sina Weibo (@天利1HzMusic)
                </a>
              </li>
            </ul>
          </div>

          <div className={classNames(styles.eShopWrapper, 'col')}>
            <h6>淘宝店铺</h6>
            <img className={styles.qrCode} src={QRCODE} alt="淘宝店铺二维码" />
            <div>
              <small>
                扫一扫
                <a
                  href="https://shop475934699.taobao.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  进入店铺
                </a>
              </small>
            </div>
          </div>
        </div>

        <div className={styles.gugugu}>
          <img
            className={styles.gugugu}
            src={GUGUGU}
            alt="グググッ！今すく交稿します！"
          />
        </div>

        <div className={styles.copyright}>
          (c) Copyright 2019, 1Hz Music. All rights reserved. Designed and
          maintained by @UN1C0DE
        </div>
      </footer>
    </div>
  );
};

export default Home;
