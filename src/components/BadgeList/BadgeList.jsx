import styles from "./BadgeList.module.css";

const BadgeList = ({ items, className = "" }) => (
  <div className={`${className}`}>
    {items.map((item, idx) => (
      <img
        className={styles.badge}
        key={item.alt || idx}
        src={item.src}
        alt={item.alt}
        loading="lazy"
      />
    ))}
  </div>
);

export default BadgeList;
