"use client";
// import Image from "next/image";
import Link from "next/link";
import useBodyClass from '@/components/useBodyClass'; // Adjust path as needed
import PageTitleWave from '@/components/PageTitleWave';
import PageTitleWaveLeft from '@/components/PageTitleWaveLeft';
import AnimatedCounter from '@/components/AnimateCounter';


export default function CompletedLiaisonbankPage() {
  useBodyClass('completed');
  return (
    <>
      <div className="page-header">
        <div className="inner-header">
          <PageTitleWave />
          <div className="page-title">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <div className="theme-breadcrumb-box">
                    <h1 data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">Completed</h1>

                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <ol className="breadcrumb justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <i className="bi bi-house-door me-1" aria-hidden="true"></i>
                            Home
                          </Link>
                        </li>

                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Completed Projects
                        </li>
                      </ol>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageTitleWaveLeft />
        </div>
      </div>
      <section className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12">

            <h2>Our Completed Almost 
              <p><AnimatedCounter endValue={125} />+ Projects</p>
            </h2>

            <div className="table-container d-none">
              <table className="project-table border table-bordered w-75 mx-auto completed">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Client Name</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>L&T Emerald Isle</td><td>Powai</td></tr>
                  <tr><td>2</td><td>Godrej – The Club Restaurant (Ground, First & Second Floor)</td><td>Vikhroli (W)</td></tr>
                  <tr><td>3</td><td>Godrej Café – The Club (Gym)</td><td>Vikhroli (W)</td></tr>
                  <tr><td>4</td><td>Godrej Trees</td><td>Vikhroli</td></tr>
                  <tr><td>5</td><td>Jaslok Hospital</td><td>Peddar Road</td></tr>
                  <tr><td>6</td><td>Piramal Arayana</td><td>Mulund</td></tr>
                  <tr><td>7</td><td>Piramal Mahalaxmi</td><td>Mahalaxmi / Byculla</td></tr>
                  <tr><td>8</td><td>Piramal Revanta</td><td>Mulund</td></tr>
                  <tr><td>9</td><td>Piramal Vaikunth</td><td>Thane</td></tr>
                  <tr><td>10</td><td>Lodha Kolshet</td><td>Thane</td></tr>
                  <tr><td>11</td><td>House of Masaba</td><td>Andheri (W)</td></tr>
                  <tr><td>12</td><td>Persia Darbar</td><td>Andheri (W)</td></tr>
                  <tr><td>13</td><td>Persia Darbar</td><td>Jogeshwari (W)</td></tr>
                  <tr><td>14</td><td>Persia Darbar (Near Kotkar Industry)</td><td>Goregaon (E)</td></tr>
                  <tr><td>15</td><td>Persia Darbar (Shop 13 & 14)</td><td>Malad (W)</td></tr>
                  <tr><td>16</td><td>Persian Darbar</td><td>Byculla</td></tr>
                  <tr><td>17</td><td>Persian Darbar Takeaway</td><td>Byculla</td></tr>
                  <tr><td>18</td><td>Domino’s Pizza</td><td>Malad (W)</td></tr>
                  <tr><td>19</td><td>Domino’s Pizza</td><td>Vile Parle (W)</td></tr>
                  <tr><td>20</td><td>Domino’s Pizza</td><td>Wadala</td></tr>
                  <tr><td>21</td><td>Domino’s Pizza</td><td>Kandivali (W)</td></tr>
                  <tr><td>22</td><td>Domino’s Pizza</td><td>Kandivali (E) / Govandi</td></tr>
                  <tr><td>23</td><td>LIC Building</td><td>Borivali (W)</td></tr>
                  <tr><td>24</td><td>Pizza Hut</td><td>Malad (W)</td></tr>
                  <tr><td>25</td><td>Pleo</td><td>Bandra Kurla Complex (BKC)</td></tr>
                  <tr><td>26</td><td>Podar Education Trust</td><td>Bandra Kurla Complex (BKC)</td></tr>
                  <tr><td>27</td><td>Rustomjee Elements</td><td>Andheri</td></tr>
                  <tr><td>28</td><td>Social Carter Road</td><td>Bandra (W)</td></tr>
                  <tr><td>29</td><td>Social Versova</td><td>Andheri (W)</td></tr>
                  <tr><td>30</td><td>Subway</td><td>Malad (W)</td></tr>
                  <tr><td>31</td><td>Subway</td><td>Dadar (W)</td></tr>
                  <tr><td>32</td><td>5 Spice</td><td>Bandra (W)</td></tr>
                  <tr><td>33</td><td>5 Spice</td><td>Santacruz (W)</td></tr>
                  <tr><td>34</td><td>5 Spice</td><td>Malad (W)</td></tr>
                  <tr><td>35</td><td>5 Spice</td><td>Oshiwara</td></tr>
                  <tr><td>36</td><td>5 Spice</td><td>Andheri (W)</td></tr>
                  <tr><td>37</td><td>5 Spice</td><td>Khar (W)</td></tr>
                  <tr><td>38</td><td>5 Spice</td><td>Chembur (E)</td></tr>
                  <tr><td>39</td><td>5 Spice</td><td>Ghatkopar (E)</td></tr>
                  <tr><td>40</td><td>1441 Pizzeria</td><td>Malad (W)</td></tr>
                  <tr><td>41</td><td>36 Allure</td><td>Goregaon</td></tr>
                  <tr><td>42</td><td>Ali Baba</td><td>Jogeshwari (W)</td></tr>
                  <tr><td>43</td><td>Arvind Hotel</td><td>Santacruz (E)</td></tr>
                  <tr><td>44</td><td>Asian Dryers</td><td>Ghatkopar (W)</td></tr>
                  <tr><td>45</td><td>Bharat Hindu Hotel</td><td>Parle (E)</td></tr>
                  <tr><td>46</td><td>Bollyfood Cafe</td><td>Powai</td></tr>
                  <tr><td>47</td><td>Bombay Bay Leaf</td><td>Andheri</td></tr>
                  <tr><td>48</td><td>Café Venture</td><td>Malad (W)</td></tr>
                  <tr><td>49</td><td>Cine Vista Ltd.</td><td>Kanjurmarg (W)</td></tr>
                  <tr><td>50</td><td>D’ Monte Park</td><td>Bandra (W)</td></tr>
                  <tr><td>51</td><td>Dholakia Family House</td><td>Bandra</td></tr>
                  <tr><td>52</td><td>Dian Beverage & Foods</td><td>Malad (W)</td></tr>
                  <tr><td>53</td><td>Dr. Amit Trivedi (Ashirwad Nursing Home)</td><td>Malad (W)</td></tr>
                  <tr><td>54</td><td>Dr. Animesh Gandhi (Delight Multi-Specialty Hospital)</td><td>Wadala</td></tr>
                  <tr><td>55</td><td>Dr. Keiki Mehta International Eye Hospital</td><td>Colaba</td></tr>
                  <tr><td>56</td><td>Dr. Kriti Nursing Home</td><td>Borivali (W)</td></tr>
                  <tr><td>57</td><td>Fatty Bao</td><td>Andheri (W)</td></tr>
                  <tr><td>58</td><td>Ferry Warf</td><td>Malad (W)</td></tr>
                  <tr><td>59</td><td>Flag’s Hotel</td><td>Dadar (W)</td></tr>
                  <tr><td>60</td><td>Foodlink</td><td>Bandra</td></tr>
                  <tr><td>61</td><td>Geeta Clinic</td><td>Dadar (W)</td></tr>
                  <tr><td>62</td><td>Geeta Clinic</td><td>Mahim (W)</td></tr>
                  <tr><td>63</td><td>Genoa</td><td>Andheri (E)</td></tr>
                  <tr><td>64</td><td>Gopal Krishna</td><td>Andheri (E)</td></tr>
                  <tr><td>65</td><td>H.K. Export India Pvt. Ltd. – Zest</td><td>Worli</td></tr>
                  <tr><td>66</td><td>Hotel Alfa</td><td>Anand Apartments, Pali Hill</td></tr>
                  <tr><td>67</td><td>Hotel Metro Palace</td><td>Jogeshwari (W)</td></tr>
                  <tr><td>68</td><td>Hotel Mini Punjab</td><td>Khar (W)</td></tr>
                  <tr><td>69</td><td>Hotel Supreme</td><td>Colaba</td></tr>
                  <tr><td>70</td><td>Khandeparkar Nursing Home</td><td>Dadar (E)</td></tr>
                  <tr><td>71</td><td>Kissa Stories Over The Food</td><td>Andheri (W)</td></tr>
                  <tr><td>72</td><td>Kokan Katta Restaurant</td><td>Andheri (E)</td></tr>
                  <tr><td>73</td><td>L.R.L. Process</td><td>Andheri (E)</td></tr>
                  <tr><td>74</td><td>Mark Garments</td><td>Andheri (E)</td></tr>
                  <tr><td>75</td><td>Marks & Spencer</td><td>Bandra (W)</td></tr>
                  <tr><td>76</td><td>Nawabia Caterers</td><td>Grant Road</td></tr>
                  <tr><td>77</td><td>Neha Enterprises</td><td>Sakinaka</td></tr>
                  <tr><td>78</td><td>New Meezbaan</td><td>Malad (E)</td></tr>
                  <tr><td>79</td><td>Orchid Enclave</td><td>Worli</td></tr>
                  <tr><td>80</td><td>Oriental Palace</td><td>Bandra (W)</td></tr>
                  <tr><td>81</td><td>Pallavi Restaurant</td><td>Goregaon (E)</td></tr>
                  <tr><td>82</td><td>Paneri Villa</td><td>Bandra (W)</td></tr>
                  <tr><td>83</td><td>Poptates</td><td>Malad (W)</td></tr>
                  <tr><td>84</td><td>Poush Restaurant</td><td>Malad (W)</td></tr>
                  <tr><td>85</td><td>Puja Casa</td><td>Bandra (W)</td></tr>
                  <tr><td>86</td><td>Red Wine Ace Pvt. Ltd.</td><td>Bandra Kurla Complex (BKC)</td></tr>
                  <tr><td>87</td><td>Rigmor Coffee</td><td>Vikhroli (E)</td></tr>
                  <tr><td>88</td><td>Rigmor Coffee</td><td>Bandra (E)</td></tr>
                  <tr><td>89</td><td>Rohit Enterprises</td><td>Santacruz (W)</td></tr>
                  <tr><td>90</td><td>Roti and Noodles</td><td>Malad (W)</td></tr>
                  <tr><td>91</td><td>Roti and Noodles</td><td>Powai</td></tr>
                  <tr><td>92</td><td>Royal Bar and Restaurant</td><td>Andheri (E)</td></tr>
                  <tr><td>93</td><td>Royal Powder</td><td>Andheri (E)</td></tr>
                  <tr><td>94</td><td>Ruchi Food</td><td>Jogeshwari (W)</td></tr>
                  <tr><td>95</td><td>Saheb Restaurant (Hill Road)</td><td>Bandra (W)</td></tr>
                  <tr><td>96</td><td>Sammy Sosa</td><td>Oshiwara</td></tr>
                  <tr><td>97</td><td>Sante Spa</td><td>Bandra</td></tr>
                  <tr><td>98</td><td>Shalimar</td><td>Jogeshwari (W)</td></tr>
                  <tr><td>99</td><td>Sigdi The Restaurant</td><td>Bandra (W)</td></tr>
                  <tr><td>100</td><td>Sigdi The Restaurant</td><td>Bandra (W)</td></tr>
                  <tr><td>101</td><td>Smoke House Deli</td><td>Bandra (W)</td></tr>
                  <tr><td>102</td><td>Subway</td><td>Powai</td></tr>
                  <tr><td>103</td><td>Sunaina Eye Care Centre</td><td>Dadar (W)</td></tr>
                  <tr><td>104</td><td>Sunbeam Gurukrupa Developer</td><td>Vile Parle</td></tr>
                  <tr><td>105</td><td>Sundaram</td><td>Bandra Kurla Complex (BKC)</td></tr>
                  <tr><td>106</td><td>Sunil Kowlis Surgical Clinic</td><td>Dadar (W)</td></tr>
                  <tr><td>107</td><td>Supreme Art Veda</td><td>Bandra (W)</td></tr>
                  <tr><td>108</td><td>Supreme Melange</td><td>Mumbai Central</td></tr>
                  <tr><td>109</td><td>Swad Bhavan</td><td>Santacruz (E)</td></tr>
                  <tr><td>110</td><td>Tea Villa Café</td><td>Vile Parle (E)</td></tr>
                  <tr><td>111</td><td>Tea Villa Café</td><td>Borivali</td></tr>
                  <tr><td>112</td><td>Tea Villa Café</td><td>Sakinaka</td></tr>
                  <tr><td>113</td><td>True Tram Trunk</td><td>Bandra Kurla Complex (BKC)</td></tr>
                  <tr><td>114</td><td>True Tram Trunk</td><td>Bandra</td></tr>
                  <tr><td>115</td><td>Tuba</td><td>Malad (E)</td></tr>
                  <tr><td>116</td><td>Ultra Coat</td><td>Andheri (E)</td></tr>
                  <tr><td>117</td><td>Usha Dryers</td><td>Juhu</td></tr>
                  <tr><td>118</td><td>Usha Textile</td><td>Andheri (E)</td></tr>
                  <tr><td>119</td><td>VIK Earth Café</td><td>Worli Sea Face</td></tr>
                  <tr><td>120</td><td>Vinanajay</td><td>Santacruz (E)</td></tr>
                  <tr><td>121</td><td>Water Front (by Mittal Builders)</td><td>Colaba</td></tr>
                  <tr><td>122</td><td>WokExpress</td><td>Malad (W)</td></tr>
                  <tr><td>123</td><td>World of Titan</td><td>Bandra (W)</td></tr>
                  <tr><td>124</td><td>Yacht</td><td>Bandra (W)</td></tr>
                  <tr><td>125</td><td>Zebro Foods</td><td>Chembur (E)</td></tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

