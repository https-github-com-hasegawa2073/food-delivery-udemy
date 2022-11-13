import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>フードデリバリーサービス</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <header>
        <Nav className="navbar navbar-dark justify-content-start bg-dark">
          <NavItem className="me-auto">
            <Link href="/" className="navbar-brand">
              ホーム
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/login" className="nav-link text-white">
              サインイン
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/register" className="nav-link text-white">
              サインアップ
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
