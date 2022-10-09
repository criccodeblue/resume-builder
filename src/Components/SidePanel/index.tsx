import SectionOutline from 'Components/SectionOutline';
import React from 'react';
import styles from './SidePanel.module.scss';

const Sections = [
  {name: 'Work Experience'},
  {name: 'Education'},
  {name: 'Projects'},
];

const SidePanel = () => {
  return (
    <div className={styles.sidePanel}>
      <div className={styles.nav}>Resume Builder</div>
      <div className={styles.sectionList}>
        {Sections.map(item => (
          <SectionOutline name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
