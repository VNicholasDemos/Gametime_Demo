import React from "react";
import styles from './ResultsTable.module.css';

//TODO: If I were not bashing this together I would simplify this passed param to a single array with url, altText, title and subTitle and pass that to this as a display component. Much easier to type, mock and test against.
export function ResultsTable(props) {
  const { resultData = {} } = props;
  const { events, performers, venues } = resultData;

  return (
    <div className={styles.tableWrapper}>
        {events?.slice(0,3).map((event) => <ResultsRow imgURL={event.performers[0].hero_image_url} altText={event.event.name} title={event.event.name} subTitle={event.venue.name} /> )}
        {performers?.slice(0,3).map((performer) => <ResultsRow imgURL={performer.hero_image_url} altText={performer.name} title={performer.name} subTitle={performer.category} /> )}
        {venues?.slice(0,3).map((venue) => <ResultsRow imgURL={venue.image_url} altText={venue.name} title={venue.name} subTitle={venue.city} /> )}
    </div>
  );
}

export function ResultsRow(props) {
    const {imgURL, altText, title, subTitle} = props;

    return (
    <div className={styles.rowWrapper}>
        <img width='50px' height='50px' src={`${imgURL}`} alt={`${altText}`} className={styles.imageText} />
        <div className={styles.rowText}><span className={styles.titleText}>{title}</span><span className={styles.subTitleText}>{subTitle}</span></div>
    </div>
    )
}