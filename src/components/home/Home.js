import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import offer1 from "../../images/offers/offer1.jpg";
import offer2 from "../../images/offers/offer2.jpg";
import offer3 from "../../images/offers/offer3.jpg";
import offer4 from "../../images/offers/offer4.jpg";
import offer5 from "../../images/offers/offer5.jpg";
import beverages from "../../images/category/beverages.png";
import fruits from "../../images/category/fruits.png"
import babyCare from "../../images/category/baby.png"
import bakery from "../../images/category/bakery.png"
import beauty from "../../images/category/beauty.png"
import "./style.css"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Oakland Bay Bridge, United States",
    imgPath: offer1,
  },
  {
    label: "Bird",
    imgPath: offer2,
  },
  {
    label: "Bali, Indonesia",
    imgPath: offer3,
  },
  {
    label: "Goč, Serbia",
    imgPath: offer4,
  },
  {
    label: "Goč, Serbia",
    imgPath: offer5,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
<div className="wrapper">
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 93,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 200,
                  display: "block",
                  //   maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
     
		<div className="slides-view">
		<ul>
			<li>
				<div className="text-area">
					<img src= {fruits} alt="img"/>
					<div className="product-info">
						<h5>
							Fruits and Vegitable
						</h5>
						<p>
						A varity of fresh fruits and vegitable 
						</p>
						<button> Explorer Fruits and Vegitable</button>
					</div>
				</div>
			</li>
			<li>
				<div className="text-area">
					<img src= {bakery} alt="img"/>
					<div className="product-info">
						<h5>
						Bakery Cakes and Diary
						</h5>
						<p>
							The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels fresh coffie , 
              milk and more 
						</p>
						<button>Explorer Bakery Cakes and Diary</button>
					</div>
				</div>
			</li>
      <li>
				<div className="text-area">
					<img src= {beverages} alt="img"/>
					<div className="product-info">
						<h5>
            Beverages
						</h5>
						<p>
						Our beverages department will ensure your fridge 
            is always fully stocked, shop for soda, juice , beer and more 
						</p>
						<button>Explorer Beverages</button>
					</div>
				</div>
			</li>
      <li>
				<div className="text-area">
					<img src= {beauty} alt="img"/>
					<div className="product-info">
						<h5>
						Beauty and Hygine
						</h5>
						<p>
						Buy beauty and persnal care products online in india at best prices
						</p>
						<button>Explorer beauty- hygine</button>
					</div>
				</div>
			</li>
      <li>
				<div className="text-area">
					<img src= {babyCare} alt="img"/>
					<div className="product-info">
						<h5>
						Baby Care 
						</h5>
						<p>
					Shop online for baby products, Diapers, Skin Care products etc
						</p>
						<button>Explorer Baby</button>
					</div>
				</div>
			</li>
		</ul>
	</div>

    </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
