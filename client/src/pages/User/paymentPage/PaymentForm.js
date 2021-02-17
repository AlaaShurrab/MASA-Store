import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        طريقة الدفع
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            variant="outlined"
            id="cardName"
            label="الاسم علي البطاقة"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            variant="outlined"
            id="cardNumber"
            label=" رقم البطاقة"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            variant="outlined"
            id="expDate"
            label="تاريخ الإنتهاء"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            variant="outlined"
            id="cvv"
            label="CVV"
            helperText="الأرقام الثلاثة الأخيرة على شريط التوقيع"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="تذكر تفاصيل بطاقة الائتمان في المرة القادمة"
          />
        </Grid>
      </Grid>
    </>
  );
}
