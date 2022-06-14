import { useRouter } from "next/router";
import styles from "../../styles/product.module.css";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (<>
  <div className={styles.container}>
    {/* <img src="https://images7.alphacoders.com/418/418724.png" alt="" />4 */}
    
    <div className={styles.product}>
      <img src="https://meo.comick.pictures/2yxBe.png?width=768" alt="" />
    </div>
  </div>
  </>);
};

export default Post;
