import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

declare global {
  interface Window {
    astrology: any;
  }
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    const data = {
      "planets":{"Moon":[0], "Sun":[30], "Mercury":[60] },
      "cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274]	
    }
    const chart = new window.astrology.Chart( 'paper', 600, 600);
    chart.radix( data );	
  })

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            Getting started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div id="paper" className={styles.chart}></div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
