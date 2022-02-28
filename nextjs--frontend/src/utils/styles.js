
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
    {
        navbar : {
            backgroundColor : "#203040",
            '& a' : {
                color : '#ffffff'
            }
        },
        brand : {
            fontWeight : 'bold',
            fontSize : '1.5rem'
        },
        main : {
            minHeight: '80vh'
        },
        footer : {
            textAlign : 'center'
        },
        grow: {
            flexGrow: 1,
          },
        section : {
            marginTop : 10,
            marginBottom : 10
        }
    }
)

export default useStyles;