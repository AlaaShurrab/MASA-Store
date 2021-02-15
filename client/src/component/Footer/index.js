import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import PaymentIcon from '@material-ui/icons/Payment';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Divider from '@material-ui/core/Divider';
import logo from '../../assets/logo.svg';

function Copyright() {
  return (
    <Typography variant="body2" align="left" className="footer-logo">
      <img alt="logo" src={logo} />
      <span>جميع الحقوق محفوظة © MASA {new Date().getFullYear()}</span>
    </Typography>
  );
}

const Footer = ({ type }) => (
  <div className="footer ">
    <Container>
      {type !== 'admin' && (
        <div>
          <Divider className="footer-hDivider" />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div>
                <SupervisorAccountIcon
                  fontSize="large"
                  style={{ color: '#8F8F8F' }}
                />
              </div>
              <div>
                <Typography variant="body1">خدمة العملاء7/24</Typography>
              </div>
              <Typography
                variant="body2"
                color="textSecondary"
                className="footer-p20"
              >
                مستعدين لخدمتك في اي وقت على مدار الساعة لتوفير أفضل تجربة تسوق
                لك
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <div>
                <PaymentIcon fontSize="large" style={{ color: '#8F8F8F' }} />
              </div>
              <div>
                <Typography variant="body1">تسوق بكل ثقة</Typography>
              </div>
              <Typography
                variant="body2"
                color="textSecondary"
                className="footer-p20"
              >
                حمايتنا للمستخدم تغطي كل عملية الشراء من تسجيل الدخول وحتى
                التوصيل
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <div>
                <VerifiedUserOutlinedIcon
                  fontSize="large"
                  style={{ color: '#8F8F8F' }}
                />
              </div>
              <div>
                <Typography variant="body1">ندعم جميع وسائل الدفع</Typography>
              </div>
              <Typography
                variant="body2"
                color="textSecondary"
                className="footer-p20"
              >
                في ماسة نوفر لك جميع وسائل الدفع بدءا من التحويل البنكي والدفع
                عند الاستلام والدفع بالبطاقات الإتمانية
                <span> MASTERCARD&VISA </span>
                والدفع بواسطة
                <span> PAYPAL </span>
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}
      <Divider className="footer-hDivider" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="footer-logoDiv">
            <Copyright />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="footer-logoDiv ">
            <Typography>تابعنا على</Typography>
            <div className="footer-icons">
              <TwitterIcon className="TwitterIcon" fontSize="large" />
              <FacebookIcon className="faceBookIcon" fontSize="large" />
              <InstagramIcon className="InstagramIcon" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>
);
Footer.propTypes = {
  type: PropTypes.string,
};
Footer.defaultProps = {
  type: 'user',
};
export default Footer;
