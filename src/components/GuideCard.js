import React, { memo } from 'react';
import { Link } from 'gatsby';

import ButtonPanel from './ButtonPanel';
import Image from './Image';

import * as css from './GuideCard.module.css';

const GuideCard = ({ title, slug, meta, icon = '📒', description, image }) => {
  // TODO refactor this to use a single ButtonPanel instance?

  return (
    <article className={css.root}>
      <div className={css.top}>
        <div className={css.icon}>{icon}</div>
        <h2 className={css.title}>
          <Link to={slug}>{title}</Link>
        </h2>
      </div>
      <div className={css.bottom}>
        <div className={css.left}>
          <p className={css.description}>{description}</p>
          <ButtonPanel
            className={css.meta}
            text={meta}
            buttonLink={slug}
            buttonText="Read"
            variant="purple"
            rainbow
          />
        </div>
        <div className={css.right}>
          <Link to={slug}>
            <Image image={image} imgClassName={css.img} />
          </Link>
          <ButtonPanel
            className={css.meta}
            text={meta}
            buttonLink={slug}
            buttonText="Read"
            variant="purple"
            rainbow
          />
        </div>
      </div>
    </article>
  );
};

export default memo(GuideCard);
