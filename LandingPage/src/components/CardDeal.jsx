import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        All in one investment platform for teens
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to manage your personal finances and investments
      </p>
      <a href="https://crypto-hunter.netlify.app/" target="_blank">
        {/* <Button styles={`mt-10`} /> */}
        <a href="">
        <button
        type="button"
        className={`mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary1 bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Coming Soon
      </button>
      </a>
      </a>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
