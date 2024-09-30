import styles from "./Breadcrumbs.module.scss";

function Breadcrumbs({ data }) {
  return (
    <div className={styles.main}>
      {data.map((item, index) => (
        <p className={item.disabled && "text-secondary"} key={index}>
            <span>{item.title}</span>
            {index < data.length - 1 && <span className={styles.separator}>/</span>}
        </p>
      ))}
    </div>
  );
}

export default Breadcrumbs;
