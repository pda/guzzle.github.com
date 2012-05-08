
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","ArrayAccess"],["c","ArrayIterator"],["c","BadFunctionCallException"],["c","BadMethodCallException"],["c","Closure"],["c","Countable"],["c","Exception"],["c","Guzzle\\Common\\AbstractHasDispatcher"],["c","Guzzle\\Common\\Cache\\AbstractCacheAdapter"],["c","Guzzle\\Common\\Cache\\CacheAdapterFactory"],["c","Guzzle\\Common\\Cache\\CacheAdapterInterface"],["c","Guzzle\\Common\\Cache\\ClosureCacheAdapter"],["c","Guzzle\\Common\\Cache\\DoctrineCacheAdapter"],["c","Guzzle\\Common\\Cache\\NullCacheAdapter"],["c","Guzzle\\Common\\Cache\\Zf1CacheAdapter"],["c","Guzzle\\Common\\Cache\\Zf2CacheAdapter"],["c","Guzzle\\Common\\Collection"],["c","Guzzle\\Common\\Event"],["c","Guzzle\\Common\\Exception\\BadMethodCallException"],["c","Guzzle\\Common\\Exception\\ExceptionCollection"],["c","Guzzle\\Common\\Exception\\InvalidArgumentException"],["c","Guzzle\\Common\\Exception\\RuntimeException"],["c","Guzzle\\Common\\Exception\\UnexpectedValueException"],["c","Guzzle\\Common\\GuzzleException"],["c","Guzzle\\Common\\HasDispatcherInterface"],["c","Guzzle\\Common\\Log\\AbstractLogAdapter"],["c","Guzzle\\Common\\Log\\ClosureLogAdapter"],["c","Guzzle\\Common\\Log\\LogAdapterInterface"],["c","Guzzle\\Common\\Log\\MonologLogAdapter"],["c","Guzzle\\Common\\Log\\Zf1LogAdapter"],["c","Guzzle\\Common\\Log\\Zf2LogAdapter"],["c","Guzzle\\Common\\NullObject"],["c","Guzzle\\Common\\Stream"],["c","Guzzle\\Common\\Validation\\AbstractConstraint"],["c","Guzzle\\Common\\Validation\\AbstractType"],["c","Guzzle\\Common\\Validation\\Blank"],["c","Guzzle\\Common\\Validation\\Bool"],["c","Guzzle\\Common\\Validation\\Choice"],["c","Guzzle\\Common\\Validation\\ConstraintInterface"],["c","Guzzle\\Common\\Validation\\Ctype"],["c","Guzzle\\Common\\Validation\\Email"],["c","Guzzle\\Common\\Validation\\Ip"],["c","Guzzle\\Common\\Validation\\IsInstanceOf"],["c","Guzzle\\Common\\Validation\\NotBlank"],["c","Guzzle\\Common\\Validation\\Numeric"],["c","Guzzle\\Common\\Validation\\Regex"],["c","Guzzle\\Common\\Validation\\String"],["c","Guzzle\\Common\\Validation\\Type"],["c","Guzzle\\Common\\Validation\\Url"],["c","Guzzle\\Common\\XmlElement"],["c","Guzzle\\Guzzle"],["c","Guzzle\\Http\\Client"],["c","Guzzle\\Http\\ClientInterface"],["c","Guzzle\\Http\\Cookie"],["c","Guzzle\\Http\\CookieJar\\ArrayCookieJar"],["c","Guzzle\\Http\\CookieJar\\CookieJarInterface"],["c","Guzzle\\Http\\CookieJar\\FileCookieJar"],["c","Guzzle\\Http\\Curl\\CurlHandle"],["c","Guzzle\\Http\\Curl\\CurlMulti"],["c","Guzzle\\Http\\Curl\\CurlMultiInterface"],["c","Guzzle\\Http\\Curl\\RequestMediator"],["c","Guzzle\\Http\\EntityBody"],["c","Guzzle\\Http\\Exception\\BadResponseException"],["c","Guzzle\\Http\\Exception\\ClientErrorResponseException"],["c","Guzzle\\Http\\Exception\\CurlException"],["c","Guzzle\\Http\\Exception\\RequestException"],["c","Guzzle\\Http\\Exception\\ServerErrorResponseException"],["c","Guzzle\\Http\\HttpException"],["c","Guzzle\\Http\\Message\\AbstractMessage"],["c","Guzzle\\Http\\Message\\EntityEnclosingRequest"],["c","Guzzle\\Http\\Message\\EntityEnclosingRequestInterface"],["c","Guzzle\\Http\\Message\\Header"],["c","Guzzle\\Http\\Message\\MessageInterface"],["c","Guzzle\\Http\\Message\\Request"],["c","Guzzle\\Http\\Message\\RequestFactory"],["c","Guzzle\\Http\\Message\\RequestFactoryInterface"],["c","Guzzle\\Http\\Message\\RequestInterface"],["c","Guzzle\\Http\\Message\\Response"],["c","Guzzle\\Http\\Plugin\\BatchQueuePlugin"],["c","Guzzle\\Http\\Plugin\\CachePlugin"],["c","Guzzle\\Http\\Plugin\\CookiePlugin"],["c","Guzzle\\Http\\Plugin\\CurlAuthPlugin"],["c","Guzzle\\Http\\Plugin\\ExponentialBackoffPlugin"],["c","Guzzle\\Http\\Plugin\\HistoryPlugin"],["c","Guzzle\\Http\\Plugin\\LogPlugin"],["c","Guzzle\\Http\\Plugin\\Md5ValidatorPlugin"],["c","Guzzle\\Http\\Plugin\\MockPlugin"],["c","Guzzle\\Http\\Plugin\\OauthPlugin"],["c","Guzzle\\Http\\QueryString"],["c","Guzzle\\Http\\UriTemplate"],["c","Guzzle\\Http\\Url"],["c","Guzzle\\Service\\Client"],["c","Guzzle\\Service\\ClientInterface"],["c","Guzzle\\Service\\Command\\AbstractCommand"],["c","Guzzle\\Service\\Command\\ClosureCommand"],["c","Guzzle\\Service\\Command\\CommandInterface"],["c","Guzzle\\Service\\Command\\CommandSet"],["c","Guzzle\\Service\\Command\\DynamicCommand"],["c","Guzzle\\Service\\Command\\Factory\\AliasFactory"],["c","Guzzle\\Service\\Command\\Factory\\CompositeFactory"],["c","Guzzle\\Service\\Command\\Factory\\ConcreteClassFactory"],["c","Guzzle\\Service\\Command\\Factory\\FactoryInterface"],["c","Guzzle\\Service\\Command\\Factory\\MapFactory"],["c","Guzzle\\Service\\Command\\Factory\\ServiceDescriptionFactory"],["c","Guzzle\\Service\\Description\\ApiCommand"],["c","Guzzle\\Service\\Description\\ApiParam"],["c","Guzzle\\Service\\Description\\ArrayDescriptionBuilder"],["c","Guzzle\\Service\\Description\\DescriptionBuilderInterface"],["c","Guzzle\\Service\\Description\\JsonDescriptionBuilder"],["c","Guzzle\\Service\\Description\\ServiceDescription"],["c","Guzzle\\Service\\Description\\ServiceDescriptionFactory"],["c","Guzzle\\Service\\Description\\ServiceDescriptionFactoryInterface"],["c","Guzzle\\Service\\Description\\ServiceDescriptionInterface"],["c","Guzzle\\Service\\Description\\XmlDescriptionBuilder"],["c","Guzzle\\Service\\Exception\\ClientNotFoundException"],["c","Guzzle\\Service\\Exception\\CommandException"],["c","Guzzle\\Service\\Exception\\CommandSetException"],["c","Guzzle\\Service\\Exception\\DescriptionBuilderException"],["c","Guzzle\\Service\\Exception\\JsonException"],["c","Guzzle\\Service\\Exception\\ServiceBuilderException"],["c","Guzzle\\Service\\Exception\\ServiceNotFoundException"],["c","Guzzle\\Service\\Exception\\ValidationException"],["c","Guzzle\\Service\\Inflector"],["c","Guzzle\\Service\\Inspector"],["c","Guzzle\\Service\\ResourceIterator"],["c","Guzzle\\Service\\ResourceIteratorApplyBatched"],["c","Guzzle\\Service\\ServiceBuilder"],["c","InvalidArgumentException"],["c","Iterator"],["c","IteratorAggregate"],["c","LogicException"],["c","RuntimeException"],["c","SeekableIterator"],["c","Serializable"],["c","SimpleXMLElement"],["c","Traversable"],["c","UnexpectedValueException"]];
