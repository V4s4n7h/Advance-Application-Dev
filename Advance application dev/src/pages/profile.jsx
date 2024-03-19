import React from "react";
import Main_Nav from "../components/home_nav";
import videoBg from "../assets/sample_4.mp4";
// import './Profile.css';

const Profile = () => {
  return (
    <>
    <div className="profile_page">
    {/* <video src={videoBg} autoPlay loop muted /> */}
      <Main_Nav />
      <div className="text_container">
        <h1 className="no_video_text">
          This is the profile page. It contains info about the User and its
          Contact Details that is required for Booking Birthday Events!
        </h1>
      </div>
      <div className="profile">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIGBwMEBQj/xABAEAACAQMBBQUGAggDCQAAAAABAgMABBEFBhIhMUEHUWFxgRMUIjKRoVKxCBUjM0JicsGy0fAWNERTgqLD0uH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AptTnlTJW/hHrSnCJWHOSSaANJS5pDQKvMVs9K1k+dfOtmgQmikzl8Dpxp1AlLRRQJRSIcgnxp1AlFLSUC0UUUB0poOXanVhQ/G1BnpK2baMNGSe+koNCVvix0pvOk5nJoXmKB8EMtxKsUETyyscKiKSxPgBWzfaVqOnEDULC6tcjP7aFl/MVbv6PemwRWms6/MitJERbxEjigxvNjzyv0q4ba4s9ZtGSaGOQKcSwyKGAOO49D0NB43T5x51sEVL+2LR7LQ9uHt9Mtlt7Z4EkEact45zioex4E0DI+JZvQVkrHD8vrWSgKa5wpNZo4y0M0h5KB9TWrM3xACgdD8prJWOH5T51koEPXwoXiM02RuGO+njkKA64pu9knwpJDwwPmoXiwXoOfnQEjYQ99Y4D8fpRM2TgdKSH5/Sg2FLAYBooyB1pKDVo86KBzoPQ3YFD7fYW+iPAPdOC3/SKkEuj7R2917exXT4pkOBctdOFdM8d+P2Zz1+HPkwqKfo43SNourWe98cd0sm7nkGXA+6mptqNhe69f3JkJFhbv7KGDfKiRh8zHHPjwHlQU128PK+1FlJPFGshswC0T7yPhjxHX0I+vOq6c/AD31Pe2jTlsNXsN2Jo96BgVJJwQ3j51XxbMYHUUGSE/DisgyeQ8qwRMN7HQ10dLjEt/EpHBTvn0oH6gotIY7RSN4YklP8AN0HoK5AyzHgSemK27+QyTyuTxeQ129kdMEuna1rEqAxWVowTPWRuX0FBwIh8HrT25caxwDCY8abM/HdHKgaTvOPOtg8Mk1rJ8w8xWWZuGBQMLcd7rTgdyPP4qxdMU5znwA6UDTxp8HBj5Uynqd0E94oEkY7xxRTQeHGigSilooLT/R41E2+1t7YMQFvLQsBnm6EEfYtV/wA09vYwElsAHgo5knj/AHry92Tia32zsdSjU+xs5EEpxwAlYQ/+QnyU1fO2sUz6np8Ikljgui3tWiYqfgUnAYcVyd30Vu+grXt4uodY1XQ7azjc3pV1KdSCRuj86qKeJ4J5YpBiSNijDxBwa9HaXshBqOuNqE8zynT1Z4FkbedpX5Ox7lVQo7yCenGmO0zSv1TtZclBuxXP7ePh38x6EGgig4cq3bW6e2YTxY3gCMEZBzWkedPU/A60BKxc5PXJPnmrR1Sy/wBm+yYWrjdur1laYHgd5znHooA9DUM2D0f9dbT2lvIMxRn20v8ASvT64qVds2qLLfWWkRsP2K+2lHczcFHnjJ9RQVwr7sWBzzWW4tLi3it5Zo91LlS0Xey5xnH5VOdiOzybUHiv9dUw2XBlhPB5fPuWt7Z/TJNu+0G41CGLGj6VjcwvwlY/kUeZBbHccUFZujRSsjqVZDhlPMEU1jvHNdzbqyNhtdqkJzhpzKuR0f4uHhxNceW3liSEyLuiZd9M/hzjPlQYqmmp6B+quza2vZ0xdXl6jnhxVCj7o+2fWuRsXoUm0Gv21qVb3dGEly4HBUHEjPeeXrVj9srxxbL2cCqF3rtdwDoFRuA+ooKbooooCiiigQUtFblnp73VnfXQJ9nZxq7eZcKB+dBaXZPpCtstfXDtuNfOUWReahOR9G41bKSQ7U6SE9osGpWrq7Lz9jKOHLqjAsPEMcYPEQ7YW2FrsjpaDgTAGOO8107+Ieza6VniuIEJjniYq646ZHMd4OQe6g7mhWOp2+utNcW4hg91aORg4YSPvqUx1wB7Tn+IVEO2HZA6vpN1dWkZa9sR7zEAOLxHhIox6EeXjVm6dK09hbzSHLyRqzcOpFPlhDyq5AOAVIPIqeY+oFB40fT7hNLh1IoTbzTPCrAfxKFP3z9jWoK9J7TbB2X+zM2kRhUge4kkt2A/dMx31+hLDyrztqen3Ol301nexmOaJsMD17iPA0FidjtutvZ6zq8iORCEiGBneJyd0d5JwPWpFs7sfjUp9f2kVJ9UuJDIsJ4pAOg8SBjwFanYNK93perabDGrSpcJcKzH5QVKk/YfWretNCRCGun9o34RwFBBdp01G+tY9G0VM32o5jEnIRR/xuT3dPWpvsfszY7J6HDpdgpIUZllYfFK55sf7DoK6FpYwQXE10iD20oC72PlReSjuHM+ZJrboPOvbjojWepW2oouVOYJD5cV+xNRTbq1W1uNLiiQhE0q3z1wSGP5mr87T9AXW9IubYAb80e9ESeUq8V+vL1qs9Y0GXXbdYreMtdzaNbSWyYwWeE4ZfP4sedBMOyXZqKLZC3u4eDXMftnfq7ccDyGKrzti1T3vVoNOg+JLKMvLu8QrNgcfTH1FT3ss2jvYuzyWzhsJrjUrN3it4CN0ODnBJ6KvHPXhjnVb7a2A0DSltLm4941nU5feL6YHki8kHhvHPoO7gEGoxWzp9hdajdpa2ULSzPndVR0HEmsHTNA2ig8DRQL39asfZTZ2RtG2nssGSSfT4ZIgeZJUuv/AHDFQ/bDRpNntpNR0qUHFvKwjJ5tGeKn6EVdmhWHuOpoxHGfSrYEeKA/+woOhs7gaBpoHL3aP/CKya0W/VV0E+doyif1NwH3NbFrAlrbpBEAI4xhR3DoK1dXP7K1UnCNeQhz5OCv1YKPWirBtEEVrDGvJEUD6VlrFav7S2icdUH5VlojT1OJZ7cwNzc8POq0202Qt9pLUwOixahF8MM2MFT+E965/wA6tGWEvIrA4A51yddtvZyJep0Yb/8AY0FG9jk9zs32lPpGoIYZZ1e2ljI4744j8q9GOwCMeoFRfUtkbK92rsdoViUzCMxXGP4hgFH/AKlPDPPB8KktwfgA7zQPj4IvlQ6bzKd4jHQU4cqKDU1W296s3RVzIvxJ5iuBb6TE0mjalEN1oHkQ8Oauc/4gDUqrAY0ggKKPhByB3HOfzoIvtVPpOymn6nq8mLaOfBnSP/iJOmF5b5xgnu58q886pZa1tJrD3dzbS+/3pzb2e6d/c8j8qAdTjqa9M3+zltqU0d1O7G6T9xK6h/d+8op4Bv5sZrPo+zml6Oshs7Ue2lIaeeQ78sx73c8W8ByHQUEN7LOzyHZq0N7qKrJqU6YY/gU/wjw/P0FUVttoraDtPqOnMu6sczGPhwKMcr9jj0r1pJeW0LENPGCDjAOT9q87duGsaRq+00J0lhLNbxGK6mUfC7A8AO8rxHrQVsRmijNFBf3b3sidR0tdobGPNzZLu3IXm0Xf6E58ialN3bxvFpl/Bj2Ulom7jqCq/wCQqZOqujI6hlYYZSOBHdXHfSI7XQxY2ozHbZMC/hUH5fQcPpQcCtbUbX3yykgU7rnDI34XVgyn0YA+lbNFFd3ZnUVurFIn+GZRncP3HpXazUKjdo3Dx8GByCO+pNpmopdruOQs4GSv4vEUR0MVjniWaF4mHBxg1kpKDDZxGG2ihdslFApZuMkY6ZrLWOVC0kZHSgy9KWiigSsF2fhVcczWekKg8xQA4VG9sdSjsrfeursWtqqb0kjNu9cVJD39K88dvWt2mo7Q2ltp94twLSErMI33kWQt4cN4DnQaW2faLJfI9joW/BbEbr3B4O4/l7h96rzOT0phOTQOdA/dFFFFB7YpKx29xDcwrLbyCSNuTD/XPwrLw60EU1W191u2C/I/xL/etKpHryBrJ2x8UTgg+BOKjMZBaQdzUWH5pyO8bB4yQQc5HSm0UWpHpWqi5HspsLMOA7m/+11QagF3dxWMJnuX9nEpy0nRPE93nUi0rWVZUjuGBVvklHIjx/zoy7lIz7pQUuRjORxrDcHdCn+agz8qDk0DlRkcsUGnPp0F1L7SZp2I4qBM6Aeikfem3clppltLfXty0cECFmeWT4UA/wBda4W2mvy6Fpd3qV0pitoPhjUNhp3PyqD3Hr4ZrzhtPtbrG0U5bUr2WSENlLdSREndgdfM5oNrafbzX9dnuVm1a8Wykkdo7ZX3AqEnCtu4zgcOJNRTNBooCgUUUC5opKKD2ZcWUqStc6eyx3DcXRv3cvg3cf5h9DyrJZXsd0GUo8MyfvYZPmQ/3HiOBrb51p31gl1h1dop4+MU6fMh/uO8HgaDBqWZLW8XuTP041FI/wDeJh/SftUl97YmSy1FEivHjZYnX93cDHNe496niPEcajC5GoPnk0CkehOfzFCNiijnRijTBfQJdWU9vIoKyxspHfkVT2ibU6js0xhWQTWiMVaCYkgYOPhP8PLyq5nKxgySMAqjJY8lArzztZf2t7rl7LpwZbVpiYwevefInOKJV87E9oem6pCESR42HB7efCsh/lPJh/rhU+3kvIA8DhlPHNeN7LULmxmMlrKyZ+Zeat5jkamOjdqeu6QFFukJ4jeVt5kYd27nh6Yoj0+o3Rjw60tVhoPbFpuohY7q0b3g4+C3bLHhxO6+PopY137btN2QukzHqu6f+W8EisenBd3J9KCGfpFaoE0/S9LR8NLI07jwUYH3NUS1SvtK2jO021t3eKHW3j/Y26OuCqL3joSST9Kip40DKKdSEUCCg0UUBRSUtB7bFFFFBqanbQ3VlLDcRh0IJwehAyCO4+NVfs9ez3d0i3D75hWeIOebAGEgnx+I0tFBIjzo6UUUVC+1jULmw2YWO2fcF1OIZG67u4WIH0x5VSPPPnRRRCUCiigfG7J+0RirrxUjgQe+p9DfSRz3TLHCHFiL5W3BkSMiMR5bx3sd9FFBAiSxLMSSeJJOSTSUlFAU00UUAKceVJRQNNFFFB//2Q=="
          className="avatar"
        />
        <div className="info">
          <h2 className="username">Organiser</h2>
          <p className="user_description">
            {" "}
            Passionate event enthusiast dedicated to creating unforgettable
            birthday celebrations. Leveraging my website to book unique and
            personalized events tailored to each client's preferences, ensuring
            joyous and memorable moments for every birthday occasion.
          </p>
          {/* <p className='user_description'>Email: john.doe@example.com</p>
            Add more information as needed */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
