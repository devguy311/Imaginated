import { gql } from "@apollo/client";

const LOAD_PREMIUM_OFFERINGS_PAGE = gql`
query
getPremiumOfferingPage(
      $linkname: String 
      )
      {
        getPremiumOfferingPage(
            linkname: $linkname 
          )
        {
            reviews{
                id
                individual
                premium_name
                user
                name
                verified
                premium_offer
                description
                like
                dislike
                benefit
                imagelink
                createdate
                type
                review
                title
                engagement
                validation
            }
            individual{
              id
              first_name
              last_name
              linkname
              aka
              subcategory
              description
              feature
              imagelink
              company
              founder
              link
              location
              category
              avg
              count
            }
            premium{
                id
                name
                individual
                description
                subheader
                imagelink
                link
                type
                rank
                avg
                count
                price
              }
        }
      }
  `;
export {LOAD_PREMIUM_OFFERINGS_PAGE};