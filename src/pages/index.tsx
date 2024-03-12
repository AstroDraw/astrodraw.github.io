import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

let Chart;
if (ExecutionEnvironment.canUseDOM) {
  const astrochart = require('@astrodraw/astrochart')
  Chart = astrochart.default;
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    const data = {
      "planets":{"Moon":[0], "Sun":[30], "Mercury":[60] },
      "cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274]
    }
    const dataRadix = {
      "planets":{"Moon":[45.930008627285154],"Venus":[263.2584780960899],"Jupiter":[173.07043720306802],"NNode":[174.6895307834239],"Mars":[217.97167231451178],"Lilith":[196.19480722950317],"Saturn":[252.92341772675047],"Chiron":[348.1157239728284],"Uranus":[16.7900184974611],"Sun":[297.68062428797253],"Mercury":[289.10132025725494],"Neptune":[338.01899718442604],"Pluto":[285.6473452237151, -0.123]},
      "cusps":[348.20510089894015,38.108507808919654,65.20783751818992,84.96083001338991,103.77897207128007,127.1084408347092,168.20510089894015,218.10850780891965,245.20783751818993,264.9608300133899,283.77897207128007,307.1084408347092]
    };

    const dataTransit = {
      "planets":{"Moon":[60.739220451080115],"Venus":[305.6996431634707],"Jupiter":[198.6565699576221],"NNode":[157.25592636170012],"Mars":[324.84013049518734],"Lilith":[232.88904207991555],"Saturn":[259.1015412368795, -0.2],"Chiron":[350.7285587924208],"Uranus":[20.678747795787075],"Sun":[260.94912160755536],"Mercury":[281.5699804920016],"Neptune":[339.3848859932604],"Pluto":[286.29683069280685]},
      "cusps":[296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
    };

    if(Chart){
      const chart = new Chart( 'paper', 600, 600, { MARGIN: 75, SYMBOL_SCALE:1});
      const radix = chart.radix( dataRadix );

      radix.addPointsOfInterest( {"As":[dataRadix.cusps[0]],"Ic":[dataRadix.cusps[3]],"Ds":[dataRadix.cusps[6]],"Mc":[dataRadix.cusps[9]]});

      const transit = radix.transit( dataTransit );
      transit.aspects();
    }
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
