import SearchForm from "./SearchForm"

const Header = props => {
     const handleSearchModal = (e) => {
          document.addEventListener('DOMContentLoaded', function () {
               //  var elems = document.querySelectorAll('.modal');
               //  var instances = M.Modal.init(elems, options);
          });
     }

     return (
          <div className='row' id='navbar'>
               <div className='col s12'>
                    <nav className='blue-grey darken-2'>
                         <div className='nav-wrapper'>
                              <a href="https://www.weatherapi.com/" className='brand-logo left' title="Free Weather API">
                                   <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" />
                              </a>
                              <div id='search-modal' className='modal'>
                                   <div id='modal-content' className='modal-content grey-text text-darken-4' >
                                        <SearchForm />
                                   </div>
                              </div>
                              <div className='brand-logo center'>
                                   <a
                                        href='#!'
                                        data-target='search-modal'
                                        onClick={handleSearchModal}
                                        className="btn-floating btn-large waves-effect waves-light grey darken-2 modal-trigger">
                                        <i class="material-icons">search</i>
                                   </a>
                              </div>
                              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                                   <li><a href='/current'>Current Conditions</a></li>
                                   <li><a href='/hourly'>Hour by Hour</a></li>
                                   <li><a href='/5dayForecast'>5 Day Forecast</a></li>
                                   <li><a href='/advisories'>Warnings and Advisories</a></li>
                              </ul>

                              <div className='col s12 lime'>
                                   <a href='#!' className='breadcrumb grey-text text-darken-4' style={{ fontSize: '10px' }}>Home </a>
                                   <a href='#!' className='breadcrumb grey-text text-darken-4' style={{ fontSize: '10px' }}>Local Weather & Traffic </a>
                                   <a href='#!' className='breadcrumb grey-text text-darken-4' style={{ fontSize: '10px' }}>Louisiana</a>
                                   <a href='#!' className='breadcrumb grey-text text-darken-4' style={{ fontSize: '10px' }}>New Orleans</a>
                                   <a href='#!' className='breadcrumb grey-text text-darken-4' style={{ fontSize: '10px' }}>Current Weather</a>
                              </div>
                         </div>
                    </nav>

               </div >
          </div >)
}
export default Header