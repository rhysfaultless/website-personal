import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Page(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`About`}>
      <main>
        <p>test</p>
      </main>
    </Layout>
  );
}
