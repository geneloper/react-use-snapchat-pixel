export enum TrackableEventNameEnum {
  /**
   * Tracks the number of completed purchases.
   *
   * @requirement Recommended
   */
  PURCHASE = 'PURCHASE',
  /**
   * Tracks the number of saves of items or content.
   *
   */
  SAVE = 'SAVE',

  /**
   * Tracks the number of checkout initiations.
   *
   */
  START_CHECKOUT = 'START_CHECKOUT',

  /**
   * Tracks the number of times item(s) have been added to cart.
   *
   * @requirement Recommended
   *
   */
  ADD_CART = 'ADD_CART',

  /**
   * Track app opens.
   *
   */
  APP_OPEN = 'APP_OPEN',

  /**
   * Tracks the number of views of specific content or product details.
   *
   */
  VIEW_CONTENT = 'VIEW_CONTENT',

  /**
   * Tracks the number of times billing information was added or updated.
   *
   */
  ADD_BILLING = 'ADD_BILLING',

  /**
   * Tracks the number of user sign-ups.
   *
   * @requirement Recommended
   */
  SIGN_UP = 'SIGN_UP',

  /**
   * Tracks the number of user searches.
   *
   */
  SEARCH = 'SEARCH',

  /**
   * Tracks the number of times a page is viewed.
   *
   * @requirement Recommended
   */
  PAGE_VIEW = 'PAGE_VIEW',

  /**
   * Tracks the number of new subscriptions.
   *
   */
  SUBSCRIBE = 'SUBSCRIBE',

  /**
   * Tracks the number of ad clicks.
   *
   */
  AD_CLICK = 'AD_CLICK',

  /**
   * Tracks the number of ad views.
   *
   */
  AD_VIEW = 'AD_VIEW',

  /**
   * Tracks the number of tutorials completed.
   *
   */
  COMPLETE_TUTORIAL = 'COMPLETE_TUTORIAL',

  /**
   * Tracks the number of levels completed in games or apps.
   *
   *
   *
   */
  LEVEL_COMPLETE = 'LEVEL_COMPLETE',

  /**
   * Tracks the number of invites sent.
   *
   */
  INVITE = 'INVITE',

  /**
   * Tracks the number of logins.
   *
   */
  LOGIN = 'LOGIN',

  /**
   * Tracks the number of shares by users.
   *
   */
  SHARE = 'SHARE',

  /**
   * Tracks the number of reservations made.
   *
   */
  RESERVE = 'RESERVE',

  /**
   * Tracks the number of achievements unlocked.
   *
   */
  ACHIEVEMENT_UNLOCKED = 'ACHIEVEMENT_UNLOCKED',

  /**
   * Tracks the number of adds to a wishlist.
   *
   */
  ADD_TO_WISHLIST = 'ADD_TO_WISHLIST',

  /**
   * Tracks the amount of time a user spent credits.
   *
   */
  SPENT_CREDITS = 'SPENT_CREDITS',

  /**
   * Tracks the number of submitted ratings.
   *
   */
  RATE = 'RATE',

  /**
   * Tracks the number of trial periods started.
   *
   */
  START_TRIAL = 'START_TRIAL',

  /**
   * Tracks the number of list views.
   *
   */
  LIST_VIEW = 'LIST_VIEW',
}
