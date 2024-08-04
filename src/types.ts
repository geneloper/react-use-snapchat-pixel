import { TrackableEventNameEnum } from './enums';

type EventParameters = {
  /**
   * Standard ISO 4217 code
   *
   * @example 'USD'
   * @example 'EUR'
   * @example 'JPY'
   */
  currency?: string;
  /**
   * Value of the purchase
   *
   * @example 1.99
   */
  price?: number;
  /**
   * Specific ID to an order or transaction
   *
   * @example '1'
   */
  transaction_id?: string;
  /**
   * International Article Number (EAN) or other product/category identifier
   *
   * @example ['1234567890123']
   */
  item_ids?: string[];
  /**
   * Item or category
   *
   * @example 'Electronics'
   */
  item_category?: string;
  /**
   * A string description for additional info
   *
   * @example 'This is a great product!'
   */
  description?: string;
  /**
   * The text that was searched
   *
   * @example 'laptop'
   */
  search_string?: string;
  /**
   * Number of items
   *
   * @example 3
   */
  number_items?: number;
  /**
   * Payment info available: 0 for no, 1 for yes
   *
   * @example 1
   */
  payment_info_available?: 0 | 1;
  /**
   * Facebook, Email, Twitter, etc.
   *
   * @example 'Email'
   */
  sign_up_method?: string;
  /**
   * Success: 0 for no, 1 for yes
   *
   * @example 1
   */
  success?: 0 | 1;
  /**
   * Brands associated with the item_ids of the conversion event
   *
   * @example ['BrandA', 'BrandB']
   */
  brands?: string[];
  /**
   * Delivery method of the product
   *
   * @example 'in_store'
   * @example 'curbside'
   * @example 'delivery'
   */
  delivery_method?: 'in_store' | 'curbside' | 'delivery';
  /**
   * Registration status of the customer
   *
   * @example 'new'
   * @example 'returning'
   * @example 'reactivated'
   */
  customer_status?: 'new' | 'returning' | 'reactivated';
  /**
   * Custom tag associated with your event
   *
   * @example 'holiday_sale'
   */
  event_tag?: string;
  /**
   * UUID unique to an event for deduplication
   *
   * @example '123e4567-e89b-12d3-a456-426614174000'
   */
  client_dedup_id?: string;
};

type TrackableEventData = {
  [key in TrackableEventNameEnum]: EventParameters;
};

type TrackableEventName = keyof typeof TrackableEventNameEnum;

interface Props {
  pixelID: string;
  /**
   * Page View On Init
   *
   * @description Automatically track PageView event on init
   *
   * @default true
   */
  pageViewOnInit?: boolean;
  /**
   * Debug
   *
   * @description Events and errors are showing in the console
   *
   * @default true
   */
  debug?: boolean;
}

interface InitProps {
  /**
   * Email address of the currently signed-in user.
   *
   * @example 'example@a.com'
   * @requirement Strongly Recommended (unless you plan to pass user_hashed_email)
   */
  user_email?: string;

  /**
   * IP address of the device.
   *
   * @example '192.168.0.1'
   * @requirement Recommended
   */
  ip_address?: string;

  /**
   * Only digits with country code, area code, and number. No other formatting characters (e.g., not 1+815-483-4610).
   *
   * @example '123456789'
   * @requirement Strongly Recommended (unless you plan to pass user_hashed_phone_number)
   */
  user_phone_number?: string;

  /**
   * SHA256 hash of the lower-cased and whitespace-removed email address.
   *
   * @example 'sha256_email'
   * @requirement Strongly Recommended (unless you plan to pass user_email)
   */
  user_hashed_email?: string;

  /**
   * SHA256 hash of the lowercase and whitespace-removed phone number.
   *
   * @example 'sha256_phone_number'
   * @requirement Strongly Recommended (unless you plan to pass user_phone_number)
   */
  user_hashed_phone_number?: string;
}

export type { TrackableEventName, TrackableEventData, Props, InitProps };
