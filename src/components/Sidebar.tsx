import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "./Box";
import Typography from "./Typography";
import HomeIcon from "../assets/HomeFilledIcon.svg";
import OrderIcon from "../assets/OrderIcon.svg";
import AnalyticsIcon from "../assets/ChartVerticalFilledIcon.svg";
import ContentIcon from "../assets/ContentFilledIcon.svg";
import DiscountIcon from "../assets/DiscountFilledIcon.svg";
import PersonIcon from "../assets/PersonFilledIcon.svg";
import ProductIcon from "../assets/ProductFilledIcon.svg";
import TargetIcon from "../assets/TargetFilledIcon.svg";
import ChevronRightIcon from "../assets/ChevronRightIcon.svg";
import StoreIcon from "../assets/StoreIcon.svg";
import PointOfSaleIcon from "../assets/PointOfSaleIcon.svg";

const Sidebar = () => {
  const [isOnlineStoreOpen, setIsOnlineStoreOpen] = useState(false);
  const [isSalesChannelOpen, setSalesChannelOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  return (
    <Box
      className="flex flex-col"
      style={{
        background: "#ccc",
        width: "250px",
        height: "calc(100vh - 141px)",
        padding: "20px",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box className="w-[250px] bg-gray-800 text-white fixed h-[calc(100vh-60px)] p-4 top-[60px]">
          <Box><Link to="/dashboard/home"style={{ textDecoration: "none", color: "inherit" }} >
              <Typography variant="body1" style={{ display: "flex", gap: "10px" }}>
                <img src={HomeIcon} alt="home-icon" style={{ width: "25px" }} />
                Home
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link
              to="/dashboard/orders"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="body1"
                style={{ display: "flex", gap: "10px" }}
              >
                <img src={OrderIcon} alt="order-icon" width={"25px"} /> Orders
              </Typography>
            </Link>
          </Box>

          <Box onClick={() => setProductsOpen(!isProductsOpen)}> <Link to="/dashboard/products" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="body1"  style={{ display: "flex", gap: "10px" }}><img src={ProductIcon} alt="order-icon" width={"25px"} />Products</Typography></Link>
          </Box>
          {isProductsOpen && (
              <Box style={{paddingLeft: "30px",display: "flex",flexDirection: "column"}}>
                <Link to="/dashboard/products/colection" style={{ textDecoration: "none", color: "inherit",  }}><Typography style={{margin:'5px'}} >Collections</Typography></Link>
                <Link to="/dashboard/products/inventory"style={{ textDecoration: "none", color: "inherit",  }}><Typography style={{margin:'5px'}}>Inventory</Typography></Link>
                <Link to="/dashboard/products/purchase-orders" style={{ textDecoration: "none", color: "inherit",  }}><Typography style={{margin:'5px'}}>Purchase orders</Typography></Link>
                <Link to="/dashboard/products/transfers" style={{ textDecoration: "none", color: "inherit",  }}><Typography style={{margin:'5px'}}>Transfers</Typography></Link>
                <Link to="/dashboard/products/gift-cards" style={{ textDecoration: "none", color: "inherit", }}><Typography style={{margin:'5px'}}>Gift cards</Typography></Link>
                <Link to="/dashboard/products/catalog" style={{ textDecoration: "none", color: "inherit", }}><Typography style={{margin:'5px'}}> Catalog</Typography></Link>

              </Box>
            )}


          <Box>
            <Link
              to="/dashboard/customers"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="body1"
                style={{ display: "flex", gap: "10px" }}
              >

                <img src={PersonIcon} alt="order-icon" width={"25px"} />
                Customers
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link
              to="/dashboard/content"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="body1"
                style={{ display: "flex", gap: "10px" }}
              >

                <img src={ContentIcon} alt="order-icon" width={"25px"} />
                Content
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link
              to="/dashboard/analytics"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="body1"
                style={{ display: "flex", gap: "10px" }}
              >

                <img src={AnalyticsIcon} alt="order-icon" width={"25px"} />
                Analytics
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link
              to="/dashboard/marketing"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="body1"
                style={{ display: "flex", gap: "10px" }}
              >
                <img src={TargetIcon} alt="order-icon" width={"25px"} />
                Marketing
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link
              to="/dashboard/discounts"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="body1"
                style={{ display: "flex", gap: "10px" }}
              >

                <img src={DiscountIcon} alt="order-icon" width={"25px"} />
                Discounts
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0px",
            cursor: "pointer",
          }}
          onClick={() => setSalesChannelOpen(!isSalesChannelOpen)}
        >
          <Typography variant="body1" style={{margin:'0'}}>Sales Channels</Typography>
          <img
            src={ChevronRightIcon}
            alt="chevron-right"
            width="20px"
            style={{
              transform: isSalesChannelOpen ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </Box>

        {isSalesChannelOpen && (
          <>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                marginTop: "0px",
              }}
              onClick={() => setIsOnlineStoreOpen(!isOnlineStoreOpen)}
            >
              <Typography
                variant="body1"
                style={{ display: "flex", alignItems: "center",margin:'0' }}
              >
                <img src={StoreIcon} alt="store-icon" width="25px" /> Online
                Store
              </Typography>
              <img
                src={ChevronRightIcon}
                alt="chevron-right"
                width="16px"
                style={{
                  transform: isOnlineStoreOpen
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </Box>

            {isOnlineStoreOpen && (
              <Box style={{paddingLeft: "30px",display: "flex",flexDirection: "column"}}>
                <Link to="/dashboard/onlinestore/themes" style={{ textDecoration: "none", color: "inherit",  }}><Typography style={{margin:'5px'}} >Themes</Typography></Link>
                <Link to="/dashboard/onlinestore/blog-posts"style={{ textDecoration: "none", color: "inherit",  }}><Typography style={{margin:'5px'}}>Blog Posts</Typography></Link>
                <Link to="/dashboard/onlinestore/pages" style={{ textDecoration: "none", color: "inherit",  }}><Typography style={{margin:'5px'}}>Pages</Typography></Link>
                <Link to="/dashboard/onlinestore/navigation" style={{ textDecoration: "none", color: "inherit",  }}><Typography style={{margin:'5px'}}>Navigation</Typography></Link>
                <Link to="/dashboard/onlinestore/preferences" style={{ textDecoration: "none", color: "inherit", }}><Typography style={{margin:'5px'}}>Preferences</Typography></Link>
              </Box>
            )}

            <Box style={{ marginTop: isOnlineStoreOpen ? "0px" : "0px" }}>
              <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="body1" style={{ display: "flex", gap: "10px", alignItems: "center", margin:'0' }}><img src={PointOfSaleIcon} alt="pos-icon" width="25px" />Point of Sale</Typography>
              </Link>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
