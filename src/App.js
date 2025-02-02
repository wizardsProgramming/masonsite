import React, { useState } from "react";
import { Container, Typography, Button, Grid, Card, CardContent, Modal, Box } from "@mui/material";

const services = [
  { name: "Brickwork", images: ["./images/brickwork1.jpg", "/images/brickwork2.jpg"], price: "$500 - $1500" },
  { name: "Stonework", images: ["./images/stonework1.jpg", "/images/stonework2.jpg"], price: "$600 - $2000" },
  { name: "Patios & Walkways", images: ["./images/PandW1.jpg", "/images/PandW2.jpg"], price: "$1000 - $3000" },
  { name: "Fireplaces", images: ["./images/fireplace1.jpg", "/images/fireplace2.jpg"], price: "$800 - $2500" },
  { name: "Restoration", images: ["./images/rest1.jpg", "/images/rest2.jpg"], price: "$1200 - $3500" }
];

const MasonLandingPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  const handleQuoteModalOpen = () => {
    setQuoteModalOpen(true);
  };

  const handleQuoteModalClose = () => {
    setQuoteModalOpen(false);
  };

  return (
    <Container maxWidth="lg" style={{ textAlign: "center", padding: "40px", backgroundColor: "#e0e0e0", color: "#333", fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <Box style={{ backgroundColor: "#424242", padding: "50px", borderRadius: "8px", color: "white" }}>
        <Typography variant="h2" gutterBottom>
          Strong Foundations, Beautiful Craftsmanship
        </Typography>
        <Typography variant="h5" gutterBottom>
          Quality Masonry Services for Homes and Businesses
        </Typography>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "#ff9800", color: "white", marginTop: "20px" }}
          onClick={handleQuoteModalOpen}
        >
          Get a Free Quote
        </Button>
      </Box>

      {/* About Us */}
      <Typography variant="h4" style={{ marginTop: "40px", color: "#424242" }}>About Us</Typography>
      <Typography>
        We are a family-owned masonry company with over 20 years of experience.
        Our team specializes in brickwork, stonework, and custom masonry solutions.
      </Typography>

      {/* Services */}
      <Typography variant="h4" style={{ marginTop: "40px", color: "#424242" }}>Our Services</Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>Click a service to see images of our work.</Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.name}>
            <Card
              onClick={() => handleOpen(service)}
              style={{
                cursor: "pointer",
                backgroundColor: "#bdbdbd",
                transition: "transform 0.3s",
                boxShadow: "3px 3px 10px rgba(0,0,0,0.3)"
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  {service.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Service Images */}
      <Modal open={open} onClose={handleClose}>
        <Box style={{ backgroundColor: "white", padding: "20px", margin: "auto", width: "50%", textAlign: "center", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
          {selectedService && (
            <>
              <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
                {selectedService.name}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {selectedService.images.map((img, index) => (
                  <Grid item key={index}>
                    <img src={img} alt={selectedService.name} style={{ width: "300px", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.2)" }} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Box>
      </Modal>

      {/* Contact */}
      <Box style={{ backgroundColor: "#424242", padding: "20px", marginTop: "40px", borderRadius: "8px", color: "white" }}>
        <Typography variant="h4">Contact Us</Typography>
        <Typography>Email: info@masoncompany.com</Typography>
        <Typography>Phone: (555) 123-4567</Typography>
      </Box>

      {/* Quote Modal */}
      <Modal open={quoteModalOpen} onClose={handleQuoteModalClose}>
        <Box style={{ backgroundColor: "white", padding: "20px", margin: "auto", width: "50%", textAlign: "center", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>Get a Free Quote</Typography>
          <Typography variant="body1" gutterBottom>Select a service to get an estimated price:</Typography>
          <Grid container spacing={3} justifyContent="center">
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.name}>
                <Card style={{ backgroundColor: "#bdbdbd", padding: "10px", cursor: "pointer" }}>
                  <CardContent>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      {service.name}
                    </Typography>
                    <Typography variant="body1">{service.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button onClick={handleQuoteModalClose} style={{ backgroundColor: "#ff9800", color: "white", marginTop: "20px" }}>Close</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default MasonLandingPage;
