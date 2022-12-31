import { useQuery, gql } from "@apollo/client";

// First Task
export default function countryQuery() {
  const COUNTRY_QUERY = gql`
    query CountryQuery {
      countries {
        name
        code
      }
    }
  `;
  return COUNTRY_QUERY;
}

// Second Task
function CodeQuery() {
  const CODE_QUERY = gql`
    query CodeQuery {
      country(code: "FR") {
        name
        capital
        currency
      }
    }
  `;

  return CODE_QUERY;
}

export { CodeQuery };
