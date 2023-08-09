import SearchForm from "./SearchForm"

const Header = props => {
     const dropdownStyle = {
          width: '280px'
     }
     const breadcrumbStyle = {
          fontSize: '10pt',
          className: 'white-text'
     }
     return (
          <div className='row' id='navbar'>
               <div className='col s12'>
                    <div id='dropdown1' className='dropdown-content' style={dropdownStyle}>
                         <SearchForm />
                    </div>
                    <nav className='blue-grey darken-2'>
                         <div className='nav-wrapper'>
                              <a href="https://www.weatherapi.com/" className='brand-logo right' title="Free Weather API">


                                   <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" />
                              </a>
                              <ul id='nav-mobile' className='center hide-on-med-and-down'>
                                   <li><a href='/current'>Current Conditions</a></li>
                                   <li><a href='/hourly'>Hour by Hour</a></li>
                                   <li><a href='/5dayForecast'>5 Day Forecast</a></li>
                                   <li><a href='/advisories'>Warnings and Advisories</a></li>
                                   <li><a className='dropdown-trigger' href='/search' data-target='dropdown1'><i className='material-icons'>search</i></a></li>

                              </ul>

                              <div className='col s12 blue '>
                                   <a href='#!' className='breadcrumb' style={breadcrumbStyle}>Home </a>
                                   <a href='#!' className='breadcrumb' style={breadcrumbStyle}>Local Weather & Traffic </a>
                                   <a href='#!' className='breadcrumb' style={breadcrumbStyle}>Louisiana</a>
                                   <a href='#!' className='breadcrumb' style={breadcrumbStyle}>New Orleans</a>
                                   <a href='#!' className='breadcrumb' style={breadcrumbStyle}>Current Weather</a>
                              </div>
                         </div>
                    </nav>

               </div>
          </div >)
}
export default Header