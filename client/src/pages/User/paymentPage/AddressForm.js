import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        عنوان الشحن
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant="outlined"
            id="firstName"
            name="firstName"
            label="الأسم الاول "
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant="outlined"
            id="lastName"
            name="lastName"
            label="الأسم الثاني"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            variant="outlined"
            id="address1"
            name="address1"
            label="العنوان الأول"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            id="address2"
            name="address2"
            label=" العنوان الثاني"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant="outlined"
            id="city"
            name="city"
            label="المدينة"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant="outlined"
            id="state"
            name="state"
            label="المحافظة"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant="outlined"
            id="zip"
            name="zip"
            label="Zip / الرمز البريدي"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant="outlined"
            id="country"
            name="country"
            label="البلد "
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="saveAddress" value="yes" />
            }
            label="
            استخدم هذا العنوان للحصول على تفاصيل الدفع"
          />
        </Grid>
      </Grid>
    </>
  );
}
