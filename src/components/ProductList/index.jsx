import { Row, Col, Spin } from "antd";
import ProductItem from "../ProductItem";
import { LoadingOutlined } from '@ant-design/icons';
import styles from "./productlist.module.css";

export default function ProductList({ products, isLoading }) {
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#F18BA2" }} spin />;
  return (
    <>
      {isLoading
        ? (
          <div className={styles.spinner}>
            <div className="spinner-wrap">
              <Spin indicator={antIcon} className="spinner" />
            </div>
          </div>
        ) : (
          <div className={styles.layout}>
            <Row justify="space-around" gutter={[32, 32]}>
              {products.map(product => (
                <Col
                  key={product.id}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  xl={{ span: 8 }}
                  xxl={{ span: 8 }}
                >

                  <ProductItem product={product} />

                </Col>
              ))}
            </Row>
          </div>
        )
      }
    </>
  );
}