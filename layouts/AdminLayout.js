import {
  HomeFilled,
  SignalFilled,
  TrophyFilled,
  SwitcherFilled,
  SlidersFilled,
  BellFilled,
  DownOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Col, Row, Breadcrumb, Dropdown, Space } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from 'static/scss/layout.module.scss';
import { getCookie, setCookie } from 'utils/cookies';

const { Header, Sider, Footer, Content } = Layout;

const adminMenu = [
  {
    id: 1,
    label: 'Bảng điều khiển',
    children: null,
    key: 'dashboard',
    type: '',
    icon: <HomeFilled />,
  },
  {
    id: 2,
    label: 'Doanh thu',
    key: 'sale',
    children: null,
    type: '',
    icon: <SignalFilled />,
  },
  {
    id: 3,
    label: 'Sân bóng',
    key: 'pitchs',
    children: null,
    type: '',
    icon: <TrophyFilled />,
  },
  {
    id: 4,
    label: 'Tin tức',
    key: 'blogs',
    children: null,
    type: '',
    icon: <SwitcherFilled />,
  },
  {
    id: 5,
    label: 'Quản lý tài khoản',
    key: '',
    children: [
      { label: 'Người dùng', key: 'users' },
      { label: 'Nhân viên', key: 'employees' },
      { label: 'Chủ sân', key: 'owners' },
    ],
    type: 'group',
    icon: '',
  },
  {
    id: 6,
    label: 'Quảng cáo',
    key: 'advertisment',
    children: null,
    type: '',
    icon: <SlidersFilled />,
  },
];

function AdminLayout({ title, children, breadName }) {
  const [isLogin, setIsLogin] = useState(false);
  const [admin, setAdmin] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (getCookie('adminLogin') !== 'true') {
      router.push('login');
    } else {
      setAdmin({
        username: getCookie('adminUser'),
        roleId: getCookie('roleIdAdmin'),
      });
      setIsLogin(true);
    }
  }, []);

  const handleClick = (e) => {
    const urlCurrent = router.pathname.slice(1);
    const urlSlug = e.key;
    if (urlSlug !== urlCurrent) {
      router.push(`${urlSlug}`);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLogin(false);
    setCookie('adminLogin', 'false');
    setCookie('adminUser', '');
    setCookie('roleIdAdmin', '');
    router.push('/admin/login');
  };

  const items = [
    {
      label: <a href="/">Tài khoản</a>,
      key: '0',
    },
    {
      label: <a href="/">Cài đặt</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <a role="button" onClick={(e) => handleLogout(e)} tabIndex={0}>
          Đăng xuất
        </a>
      ),
      key: '3',
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="static/scss/css/draft.css" /> */}
        {/* <script src="static/js/draft.js" type="text/javascript" defer /> */}
      </Head>
      <Layout className={styles.layout_admin} style={{ display: `${isLogin ? '' : 'none'}` }}>
        <Sider
          trigger={null}
          collapsible
          width={250}
          style={{ position: 'fixed', backgroundColor: '#fff', zIndex: '1000', height: '100%' }}
        >
          <Menu
            onClick={handleClick}
            mode="inline"
            defaultSelectedKeys={['1']}
            theme="light"
            style={{
              height: '100%',
            }}
            items={adminMenu}
          />
        </Sider>
        <Layout style={{ marginLeft: '250px' }}>
          <Header className={styles.header_admin}>
            <Row align="middle">
              <Col span={12}>
                <Breadcrumb>
                  <Breadcrumb.Item>Trang quản trị</Breadcrumb.Item>
                  <Breadcrumb.Item className={styles.text_bold}>{breadName}</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col span={11} offset={1}>
                <Row align="middle">
                  <Col span={4} offset={14} className={styles.admin_login}>
                    <BellFilled />
                  </Col>

                  <Col span={4}>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      trigger={['click']}
                    >
                      <a role="button" onClick={(e) => e.preventDefault()} tabIndex={0}>
                        <Space>
                          {admin?.username}
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Header>
          <Content style={{ padding: '0 20px' }}>{children}</Content>
          <Footer>
            <div className={styles.copyright}>
              <p>Website được làm bởi nhóm 5 anh em siêu nhân</p>
            </div>
          </Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}

export default AdminLayout;
