import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Typography from '@material-ui/core/Typography';

const DiscountCards = (props) => {
    return (
        <div className="discount-cards-container">
        <Card className="discount-card">
      <CardActionArea>
        <CardContent className="discount-card-text">
          <Typography gutterBottom variant="h5" component="h2">
            {props.value}% off
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.code}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="copy-icon-container">
        <FileCopyOutlinedIcon className="copy-icon" />
      </CardActions>
    </Card>
        </div>
    )
}

export default DiscountCards
