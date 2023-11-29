import Image from 'next/image';

import { Container } from '@components';
import SiteConfig from '../../config/index.json';

export const metadata = {
  title: SiteConfig.site.siteName,
  description: SiteConfig.site.siteDescription
}

/**
 * About page `/about`
 */
export default function About() {
  return (
    <Container width="narrow">
      <h1 className="text-3xl text-center mb-6 md:text-4xl">About Me 🧘🏾‍♂️</h1>
      <div className="postContent">
        <div className="mb-3 float-left mr-2 md:mr-4" style={{ shapeOutside: 'circle()' }}>
          <Image src="/images/avatar.jpg" width={150} height={150} alt="" objectFit="cover" className="rounded-full" />
        </div>
        <p>
          I&apos;m{' '}
          <a
            href="https://twitter.com/vick_OnRails"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Victor
          </a>
          , a Designer and Frontend Engineer learning to build fast and
          delightful experiences on the web. I&apos;m also passionate about Web
          Standards, Design Systems and Learning in Public. Aside from my day job, I work on a few side projects to help
          designers and engineers build with speed.
        </p>
        <p>
          I work heavily with ReactJs, Redux, Styled Components, Figma,
          Storybook & recently picked up C#/Dotnet Core for backend APIs. If
          you&apos;re excited about any of the following, please shoot at me on{' '}
          <a
            href="https://twitter.com/vick_OnRails"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{' '}
          and let&apos;s be friends 😊.
        </p>
      </div>
    </Container>
  );
};

