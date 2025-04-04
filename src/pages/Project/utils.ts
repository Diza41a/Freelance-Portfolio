import gsap from 'gsap';
import { classNames } from './styles';
import { classNames as projectCardClassNames } from '../../components/ProjectCard/styles';
import { classNames as buttonClassNames } from '../../components/Button/styles';
import {
  generateDivFadeInTween,
  generateSlideInTween,
  generateTitleTween,
} from '../../utils/gsapUtils';

const generateMetaContainerTimeline = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.${classNames.metaContainer}`,
      start: 'top 80%',
      end: 'bottom 20%',
    },
  });

  timeline.add(
    generateTitleTween({ cssSelector: `.${classNames.metaContainer} > h4, .MuiDivider-root` }),
  );
  timeline.add(
    generateSlideInTween({
      cssSelector: `.${classNames.metaContainer} > h5`,
      scrollDirection: 'left',
    }),
    '-=0.75',
  );
  timeline.add(
    generateDivFadeInTween({
      cssSelector: `.${classNames.metaContainer} > ul, .${classNames.technologies}`,
    }),
    '-=0.75',
  );
  timeline.add(
    generateDivFadeInTween({
      cssSelector: `.${classNames.metaContainer} > .${buttonClassNames.root}`,
      stagger: 0.2,
    }),
    '-=0.75',
  );
};

const generateDescriptionContainerTimeline = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.${classNames.descriptionContainer}`,
      start: 'top 90%',
      end: 'bottom 10%',
    },
  });

  timeline.add(
    generateTitleTween({
      cssSelector: `.${classNames.descriptionContainer} > h3`,
    }),
  );

  timeline.add(
    generateSlideInTween({
      cssSelector: `.${classNames.descriptionBody}`,
      scrollDirection: 'right',
    }),
    '-=0.75',
  );
};

const generateMediaTween = () => {
  const mediaEls = document.querySelectorAll(`.${classNames.media}`);

  mediaEls.forEach((el) =>
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'bottom 10%',
        },
      },
    ),
  );
};

const generateNavButtonsTimeline = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.${classNames.navButtonsContainer}`,
      start: 'top 90%',
      end: 'bottom 10%',
    },
  });

  timeline.add(
    generateTitleTween({
      cssSelector: `.${classNames.navButtonsContainer} > h3`,
    }),
  );

  timeline.add(
    generateSlideInTween({
      cssSelector: `.${projectCardClassNames.root}`,
      scrollTriggerSelector: `.${classNames.navButtonsContainer}`,
      scrollDirection: 'bottom',
      stagger: 0.2,
    }),
    '-=0.75',
  );
};

const generateDividersTween = () => {
  const dividerEls = document.querySelectorAll('.MuiDivider-root');

  dividerEls.forEach((el) => {
    generateTitleTween({
      cssSelector: el,
      scrollTriggerSelector: el,
    });
  });
};

const generateDetailsBlocksTimeline = () => {
  const detailsBlockEls = document.querySelectorAll(`.${classNames.detailsBlock}`);

  detailsBlockEls.forEach((el) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'bottom 10%',
      },
    });

    const h4El = el.querySelector('h4');

    if (h4El) {
      timeline.add(
        generateTitleTween({
          cssSelector: h4El,
        }),
      );
    }

    const liEls = el.querySelectorAll('li');
    if (liEls) {
      timeline.add(
        generateSlideInTween({
          cssSelector: liEls,
          stagger: 0.2,
          scrollDirection: 'right',
        }),
        '-=0.75',
      );
    }

    const feedbackContainerEl = el.querySelector(`.${classNames.feedbackContainer}`);
    if (feedbackContainerEl) {
      const feedbackTextEl = feedbackContainerEl.querySelector(`.${classNames.feedbackText}`);
      const feedbackAuthorEl = feedbackContainerEl.querySelector(`.${classNames.feedbackAuthor}`);

      if (feedbackTextEl) {
        timeline.add(
          generateSlideInTween({
            cssSelector: feedbackTextEl,
            scrollDirection: 'right',
          }),
          '-=0.75',
        );
      }
      if (feedbackAuthorEl) {
        timeline.add(
          generateDivFadeInTween({
            cssSelector: feedbackAuthorEl,
          }),
          '-=0.75',
        );
      }
    }
  });
};

export const generateProjectPageTweens = () => {
  generateMetaContainerTimeline();
  generateDescriptionContainerTimeline();
  generateDividersTween();
  generateMediaTween();
  generateDetailsBlocksTimeline();
  generateNavButtonsTimeline();
};
