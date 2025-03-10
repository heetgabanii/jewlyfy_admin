import { Link } from "react-router-dom";
import Box from "./Box";
import Typography from "./Typography";
import HomeIcon from '../assets/HomeFilledIcon.svg'
import OrderIcon from '../assets/OrderIcon.svg'
import AnalyticsIcon from '../assets/ChartVerticalFilledIcon.svg'
import ContentIcon from '../assets/ContentFilledIcon.svg'
import DiscountIcon from '../assets/DiscountFilledIcon.svg'
import PersonIcon from '../assets/PersonFilledIcon.svg'
import ProductIcon from '../assets/ProductFilledIcon.svg'
import TargetIcon from '../assets/TargetFilledIcon.svg'
import ChevronRightIcon from '../assets/ChevronRightIcon.svg'

const Sidebar = () => {
  return (
    <Box className="flex flex-col" style={{
        background: "#ccc",
        width: "250px",
        height: "calc(100vh - 141px)",
        padding: "20px",
      }}>
      <Box style={{display:'flex',flexDirection:'column',gap:'20px'}}>
      <Box
        className="w-[250px] bg-gray-800 text-white fixed h-[calc(100vh-60px)] p-4 top-[60px]"
      >
        <Box  > <Link to="/dashboard/home" style={{textDecoration:'none',color:'inherit'}}><Typography variant="body1" style={{display:'flex', gap:'10px'}}><img src={HomeIcon} alt="home-icon" style={{width:"25px"}} />Home</Typography></Link> </Box>
        <Box><Link to="/dashboard/orders"    style={{textDecoration:'none',color:'inherit'}}><Typography variant="body1" style={{display:'flex', gap:'10px'  ,}}> <img src={OrderIcon} alt="order-icon" width={'25px'}/> Orders</Typography></Link></Box>
        <Box><Link to="/dashboard/products"  style={{textDecoration:'none',color:'inherit'}}><Typography variant="body1" style={{display:'flex', gap:'10px' }}> <img src={ProductIcon} alt="order-icon" width={'25px'}/> Products</Typography></Link></Box>
        <Box><Link to="/dashboard/customers" style={{textDecoration:'none',color:'inherit'}}><Typography variant="body1" style={{display:'flex', gap:'10px' }}> <img src={PersonIcon} alt="order-icon" width={'25px'}/> Customers</Typography></Link></Box>
        <Box><Link to="/dashboard/content"   style={{textDecoration:'none',color:'inherit'}}><Typography variant="body1" style={{display:'flex', gap:'10px'  }}> <img src={ContentIcon} alt="order-icon" width={'25px'}/> Content</Typography></Link></Box>
        <Box><Link to="/dashboard/analytics" style={{textDecoration:'none',color:'inherit'}}><Typography variant="body1" style={{display:'flex', gap:'10px'}}> <img src={AnalyticsIcon} alt="order-icon" width={'25px'}/> Analytics</Typography></Link></Box>
        <Box><Link to="/dashboard/marketing" style={{textDecoration:'none',color:'inherit'}}><Typography variant="body1" style={{display:'flex', gap:'10px'}}> <img src={TargetIcon} alt="order-icon" width={'25px'}/> Marketing</Typography></Link></Box>
        <Box><Link to="/dashboard/discounts" style={{textDecoration:'none',color:'inherit'}}><Typography variant="body1" style={{display:'flex', gap:'10px'}}> <img src={DiscountIcon} alt="order-icon" width={'25px'}/> Discounts</Typography></Link></Box>
     
      </Box>
      <Box style={{display:'flex', alignItems:'center', justifyContent:"space-between"}}>
        Sales Channel
        <img src={ChevronRightIcon} alt="chevron-right" width={'25px'} />
      </Box>
     
      </Box>
    </Box>
  );
};

export default Sidebar;



