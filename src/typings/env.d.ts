/**
 * Namespace Env
 *
 * It is used to declare the type of the import.meta object
 */
declare namespace Env {
  /** The router history mode */
  type RouterHistoryMode = 'hash' | 'history' | 'memory'

  /** Interface for import. Meta */
  interface ImportMeta extends ImportMetaEnv {
    /** The base url of the application */
    readonly VITE_BASE_URL: string
    /** The title of the application */
    readonly VITE_APP_TITLE: string
    /** The description of the application */
    readonly VITE_APP_DESC: string
    /** The router history mode */
    readonly VITE_ROUTER_HISTORY_MODE?: RouterHistoryMode
    /** The prefix of the iconify icon */
    readonly VITE_ICON_PREFIX: 'icon'
    /**
     * The prefix of the local icon
     *
     * This prefix is start with the icon prefix
     */
    readonly VITE_ICON_LOCAL_PREFIX: 'local-icon'
    /**
     * Whether to enable the http proxy
     *
     * Only valid in the development environment
     */
    readonly VITE_HTTP_PROXY?: CommonType.YesOrNo
    /** The back service env */
    readonly VITE_SERVICE_ENV?: App.Service.EnvType
    /**
     * The auth route mode
     *
     * - Static: the auth routes is generated in front-end
     * - Dynamic: the auth routes is generated in back-end
     */
    readonly VITE_AUTH_ROUTE_MODE: 'static' | 'dynamic'
    /**
     * The home route key
     *
     * It only has effect when the auth route mode is static, if the route mode is dynamic, the home route key is
     * defined in the back-end
     */
    readonly VITE_ROUTE_HOME: import('@elegant-router/types').LastLevelRouteKey
    /**
     * Default menu icon if menu icon is not set
     *
     * Iconify icon name
     */
    readonly VITE_MENU_ICON: string
    /** Whether to build with sourcemap */
    readonly VITE_SOURCE_MAP?: CommonType.YesOrNo
    /**
     * Iconify api provider url
     *
     * If the project is deployed in intranet, you can set the api provider url to the local iconify server
     *
     * @link https://docs.iconify.design/api/providers.html
     */
    readonly VITE_ICONIFY_URL?: string
    /** Auto login username for development environment */
    readonly VITE_AUTO_LOGIN_USERNAME?: string
    /** Auto login password for development environment */
    readonly VITE_AUTO_LOGIN_PASSWORD?: string
    readonly globEager: <T = any>(globPattern: string) => Record<string, T>
  }
}
