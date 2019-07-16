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

import IconAudio from '../assets/i/audio';
import IconVideo from '../assets/i/video';

import IconLock from '../assets/i/lock';
import IconUnlock from '../assets/i/unlock';
import IconCheck from '../assets/i/check';
import IconMapPin from '../assets/i/mappin';
import IconCalendar from '../assets/i/calendar';
import IconDesk from '../assets/i/desk';

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
        <section className={styles.exhibitions}>
          <h1>Exhibitions</h1>

          <section className={styles.exhibitionItem}>
            <a
              className={styles.exhibitionLocationMap}
              href="https://map.baidu.com/poi/%E6%AD%A3%E5%A4%A7%E5%B9%BF%E5%9C%BA/@13526089.706422593,3641953.43028283,17.42z?uid=5fb82246fcf807f9bea240b60&info_merge=1&isBizPoi=false&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="http://api.map.baidu.com/staticimage?width=360&height=240&center=121.506806,31.242865&zoom=17&markers=121.505962,31.242402&markerStyles=s,0&ak=jKF956d4IZw7jL4YWy89WwuuBj5Z9HIY"
                alt="Location"
              />
            </a>

            <div className={styles.exhibitionDetail}>
              <h4>
                <a
                  href="https://shouxiaji.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Furry Summer Gathering 兽夏祭
                </a>
              </h4>

              <div>
                <IconCalendar />
                <time>2019/07/20</time>
              </div>

              <div>
                <IconMapPin />
                <address>
                  No.168, West Lujiazui Road, Pudong District, Shanghai
                  <br />
                  上海市浦东新区陆家嘴西路168号正大广场
                </address>
              </div>

              <div>
                <IconDesk />
                <span>Stand D-9</span>
              </div>
            </div>
          </section>

          <section className={styles.exhibitionItem}>
            <a
              className={styles.exhibitionLocationMap}
              href="https://map.baidu.com/poi/%E9%9B%85%E6%82%A6%E6%96%B0%E5%A4%A9%E5%9C%B0%E5%A9%9A%E5%AE%B4%E5%B1%95%E4%BC%9A%E4%B8%AD%E5%BF%83/@13518522.964582931,3647363.3279271508,18.26z?uid=33d37a074b6954123a04b1cf&info_merge=1&isBizPoi=false&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="http://api.map.baidu.com/staticimage?width=360&height=240&center=121.434048,31.281832&zoom=16&markers=121.438351,31.284046&markerStyles=s,0&ak=jKF956d4IZw7jL4YWy89WwuuBj5Z9HIY"
                alt="Location"
              />
            </a>

            <div className={styles.exhibitionDetail}>
              <h4>
                <a
                  href="https://www.furrychina.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Furry China 极兽聚
                </a>
              </h4>

              <div>
                <IconCalendar />
                <time>2019/07/28</time>
              </div>

              <div>
                <IconMapPin />
                <address>
                  No.88, Gaoping Road, Jing'an District, Shanghai
                  <br />
                  上海市静安区高平路88号(近灵石路)雅悦新天地婚宴会展中心
                </address>
              </div>

              <div>
                <IconDesk />
                <span>Stand D10</span>
              </div>
            </div>
          </section>
        </section>

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
          (c) Copyright 2019, 1Hz Music. All rights reserved. Designed by
          @UN1C0DE
        </div>
      </footer>
    </div>
  );
};

export default Home;
