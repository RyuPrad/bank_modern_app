import { card } from '../assets';
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () =>  (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better deal <br className='sm:block hidden'/>
        in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I am focusing on becoming a full stack developer,
        my prefer tech stack is the MERN stack, I want to develop 
        website and mobile application.
      </p>

      <Button styles="mt-10"/>
    </div>  

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'/>

    </div>
  </section>
  )

export default CardDeal