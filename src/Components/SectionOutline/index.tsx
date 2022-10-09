import React from 'react';
import styles from './SectionOutline.module.scss';

interface SectionOutlineProps {
  name: string;
}

const SectionOutline = ({name}: SectionOutlineProps) => {
  return (
    <div className={styles.outline}>
      Section {name}
      <button>Add Section</button>
    </div>
  );
};

export default SectionOutline;
