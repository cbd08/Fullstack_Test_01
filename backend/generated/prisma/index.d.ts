
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model projectmember
 * 
 */
export type projectmember = $Result.DefaultSelection<Prisma.$projectmemberPayload>
/**
 * Model task
 * 
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const projectmember_role: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type projectmember_role = (typeof projectmember_role)[keyof typeof projectmember_role]


export const task_status: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type task_status = (typeof task_status)[keyof typeof task_status]


export const task_priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type task_priority = (typeof task_priority)[keyof typeof task_priority]

}

export type projectmember_role = $Enums.projectmember_role

export const projectmember_role: typeof $Enums.projectmember_role

export type task_status = $Enums.task_status

export const task_status: typeof $Enums.task_status

export type task_priority = $Enums.task_priority

export const task_priority: typeof $Enums.task_priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectmember`: Exposes CRUD operations for the **projectmember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projectmembers
    * const projectmembers = await prisma.projectmember.findMany()
    * ```
    */
  get projectmember(): Prisma.projectmemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    project: 'project',
    projectmember: 'projectmember',
    task: 'task',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "projectmember" | "task" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      projectmember: {
        payload: Prisma.$projectmemberPayload<ExtArgs>
        fields: Prisma.projectmemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectmemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectmemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload>
          }
          findFirst: {
            args: Prisma.projectmemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectmemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload>
          }
          findMany: {
            args: Prisma.projectmemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload>[]
          }
          create: {
            args: Prisma.projectmemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload>
          }
          createMany: {
            args: Prisma.projectmemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectmemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload>
          }
          update: {
            args: Prisma.projectmemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload>
          }
          deleteMany: {
            args: Prisma.projectmemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectmemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectmemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectmemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectmember>
          }
          groupBy: {
            args: Prisma.projectmemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectmemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectmemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectmemberCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: projectOmit
    projectmember?: projectmemberOmit
    task?: taskOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    projectmember: number
    task: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectmember?: boolean | ProjectCountOutputTypeCountProjectmemberArgs
    task?: boolean | ProjectCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmemberWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    project: number
    projectmember: number
    task: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | UserCountOutputTypeCountProjectArgs
    projectmember?: boolean | UserCountOutputTypeCountProjectmemberArgs
    task?: boolean | UserCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    ownerId: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    projectmember?: boolean | project$projectmemberArgs<ExtArgs>
    task?: boolean | project$taskArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type projectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    projectmember?: boolean | project$projectmemberArgs<ExtArgs>
    task?: boolean | project$taskArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      projectmember: Prisma.$projectmemberPayload<ExtArgs>[]
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      ownerId: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectmember<T extends project$projectmemberArgs<ExtArgs> = {}>(args?: Subset<T, project$projectmemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task<T extends project$taskArgs<ExtArgs> = {}>(args?: Subset<T, project$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'Int'>
    readonly name: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly createdAt: FieldRef<"project", 'DateTime'>
    readonly updatedAt: FieldRef<"project", 'DateTime'>
    readonly ownerId: FieldRef<"project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.projectmember
   */
  export type project$projectmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    where?: projectmemberWhereInput
    orderBy?: projectmemberOrderByWithRelationInput | projectmemberOrderByWithRelationInput[]
    cursor?: projectmemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectmemberScalarFieldEnum | ProjectmemberScalarFieldEnum[]
  }

  /**
   * project.task
   */
  export type project$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model projectmember
   */

  export type AggregateProjectmember = {
    _count: ProjectmemberCountAggregateOutputType | null
    _avg: ProjectmemberAvgAggregateOutputType | null
    _sum: ProjectmemberSumAggregateOutputType | null
    _min: ProjectmemberMinAggregateOutputType | null
    _max: ProjectmemberMaxAggregateOutputType | null
  }

  export type ProjectmemberAvgAggregateOutputType = {
    projectId: number | null
    userId: number | null
  }

  export type ProjectmemberSumAggregateOutputType = {
    projectId: number | null
    userId: number | null
  }

  export type ProjectmemberMinAggregateOutputType = {
    projectId: number | null
    userId: number | null
    role: $Enums.projectmember_role | null
    createdAt: Date | null
  }

  export type ProjectmemberMaxAggregateOutputType = {
    projectId: number | null
    userId: number | null
    role: $Enums.projectmember_role | null
    createdAt: Date | null
  }

  export type ProjectmemberCountAggregateOutputType = {
    projectId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type ProjectmemberAvgAggregateInputType = {
    projectId?: true
    userId?: true
  }

  export type ProjectmemberSumAggregateInputType = {
    projectId?: true
    userId?: true
  }

  export type ProjectmemberMinAggregateInputType = {
    projectId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type ProjectmemberMaxAggregateInputType = {
    projectId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type ProjectmemberCountAggregateInputType = {
    projectId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectmemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectmember to aggregate.
     */
    where?: projectmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmembers to fetch.
     */
    orderBy?: projectmemberOrderByWithRelationInput | projectmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectmembers
    **/
    _count?: true | ProjectmemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectmemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectmemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectmemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectmemberMaxAggregateInputType
  }

  export type GetProjectmemberAggregateType<T extends ProjectmemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectmember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectmember[P]>
      : GetScalarType<T[P], AggregateProjectmember[P]>
  }




  export type projectmemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmemberWhereInput
    orderBy?: projectmemberOrderByWithAggregationInput | projectmemberOrderByWithAggregationInput[]
    by: ProjectmemberScalarFieldEnum[] | ProjectmemberScalarFieldEnum
    having?: projectmemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectmemberCountAggregateInputType | true
    _avg?: ProjectmemberAvgAggregateInputType
    _sum?: ProjectmemberSumAggregateInputType
    _min?: ProjectmemberMinAggregateInputType
    _max?: ProjectmemberMaxAggregateInputType
  }

  export type ProjectmemberGroupByOutputType = {
    projectId: number
    userId: number
    role: $Enums.projectmember_role
    createdAt: Date
    _count: ProjectmemberCountAggregateOutputType | null
    _avg: ProjectmemberAvgAggregateOutputType | null
    _sum: ProjectmemberSumAggregateOutputType | null
    _min: ProjectmemberMinAggregateOutputType | null
    _max: ProjectmemberMaxAggregateOutputType | null
  }

  type GetProjectmemberGroupByPayload<T extends projectmemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectmemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectmemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectmemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectmemberGroupByOutputType[P]>
        }
      >
    >


  export type projectmemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectmember"]>



  export type projectmemberSelectScalar = {
    projectId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type projectmemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "userId" | "role" | "createdAt", ExtArgs["result"]["projectmember"]>
  export type projectmemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $projectmemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectmember"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: number
      userId: number
      role: $Enums.projectmember_role
      createdAt: Date
    }, ExtArgs["result"]["projectmember"]>
    composites: {}
  }

  type projectmemberGetPayload<S extends boolean | null | undefined | projectmemberDefaultArgs> = $Result.GetResult<Prisma.$projectmemberPayload, S>

  type projectmemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectmemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectmemberCountAggregateInputType | true
    }

  export interface projectmemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectmember'], meta: { name: 'projectmember' } }
    /**
     * Find zero or one Projectmember that matches the filter.
     * @param {projectmemberFindUniqueArgs} args - Arguments to find a Projectmember
     * @example
     * // Get one Projectmember
     * const projectmember = await prisma.projectmember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectmemberFindUniqueArgs>(args: SelectSubset<T, projectmemberFindUniqueArgs<ExtArgs>>): Prisma__projectmemberClient<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projectmember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectmemberFindUniqueOrThrowArgs} args - Arguments to find a Projectmember
     * @example
     * // Get one Projectmember
     * const projectmember = await prisma.projectmember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectmemberFindUniqueOrThrowArgs>(args: SelectSubset<T, projectmemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectmemberClient<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectmember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmemberFindFirstArgs} args - Arguments to find a Projectmember
     * @example
     * // Get one Projectmember
     * const projectmember = await prisma.projectmember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectmemberFindFirstArgs>(args?: SelectSubset<T, projectmemberFindFirstArgs<ExtArgs>>): Prisma__projectmemberClient<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectmember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmemberFindFirstOrThrowArgs} args - Arguments to find a Projectmember
     * @example
     * // Get one Projectmember
     * const projectmember = await prisma.projectmember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectmemberFindFirstOrThrowArgs>(args?: SelectSubset<T, projectmemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectmemberClient<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projectmembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projectmembers
     * const projectmembers = await prisma.projectmember.findMany()
     * 
     * // Get first 10 Projectmembers
     * const projectmembers = await prisma.projectmember.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectmemberWithProjectIdOnly = await prisma.projectmember.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends projectmemberFindManyArgs>(args?: SelectSubset<T, projectmemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projectmember.
     * @param {projectmemberCreateArgs} args - Arguments to create a Projectmember.
     * @example
     * // Create one Projectmember
     * const Projectmember = await prisma.projectmember.create({
     *   data: {
     *     // ... data to create a Projectmember
     *   }
     * })
     * 
     */
    create<T extends projectmemberCreateArgs>(args: SelectSubset<T, projectmemberCreateArgs<ExtArgs>>): Prisma__projectmemberClient<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projectmembers.
     * @param {projectmemberCreateManyArgs} args - Arguments to create many Projectmembers.
     * @example
     * // Create many Projectmembers
     * const projectmember = await prisma.projectmember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectmemberCreateManyArgs>(args?: SelectSubset<T, projectmemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projectmember.
     * @param {projectmemberDeleteArgs} args - Arguments to delete one Projectmember.
     * @example
     * // Delete one Projectmember
     * const Projectmember = await prisma.projectmember.delete({
     *   where: {
     *     // ... filter to delete one Projectmember
     *   }
     * })
     * 
     */
    delete<T extends projectmemberDeleteArgs>(args: SelectSubset<T, projectmemberDeleteArgs<ExtArgs>>): Prisma__projectmemberClient<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projectmember.
     * @param {projectmemberUpdateArgs} args - Arguments to update one Projectmember.
     * @example
     * // Update one Projectmember
     * const projectmember = await prisma.projectmember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectmemberUpdateArgs>(args: SelectSubset<T, projectmemberUpdateArgs<ExtArgs>>): Prisma__projectmemberClient<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projectmembers.
     * @param {projectmemberDeleteManyArgs} args - Arguments to filter Projectmembers to delete.
     * @example
     * // Delete a few Projectmembers
     * const { count } = await prisma.projectmember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectmemberDeleteManyArgs>(args?: SelectSubset<T, projectmemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projectmembers
     * const projectmember = await prisma.projectmember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectmemberUpdateManyArgs>(args: SelectSubset<T, projectmemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projectmember.
     * @param {projectmemberUpsertArgs} args - Arguments to update or create a Projectmember.
     * @example
     * // Update or create a Projectmember
     * const projectmember = await prisma.projectmember.upsert({
     *   create: {
     *     // ... data to create a Projectmember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projectmember we want to update
     *   }
     * })
     */
    upsert<T extends projectmemberUpsertArgs>(args: SelectSubset<T, projectmemberUpsertArgs<ExtArgs>>): Prisma__projectmemberClient<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projectmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmemberCountArgs} args - Arguments to filter Projectmembers to count.
     * @example
     * // Count the number of Projectmembers
     * const count = await prisma.projectmember.count({
     *   where: {
     *     // ... the filter for the Projectmembers we want to count
     *   }
     * })
    **/
    count<T extends projectmemberCountArgs>(
      args?: Subset<T, projectmemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectmemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projectmember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectmemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectmemberAggregateArgs>(args: Subset<T, ProjectmemberAggregateArgs>): Prisma.PrismaPromise<GetProjectmemberAggregateType<T>>

    /**
     * Group by Projectmember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectmemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectmemberGroupByArgs['orderBy'] }
        : { orderBy?: projectmemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectmemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectmemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectmember model
   */
  readonly fields: projectmemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectmember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectmemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectmember model
   */
  interface projectmemberFieldRefs {
    readonly projectId: FieldRef<"projectmember", 'Int'>
    readonly userId: FieldRef<"projectmember", 'Int'>
    readonly role: FieldRef<"projectmember", 'projectmember_role'>
    readonly createdAt: FieldRef<"projectmember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projectmember findUnique
   */
  export type projectmemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectmember to fetch.
     */
    where: projectmemberWhereUniqueInput
  }

  /**
   * projectmember findUniqueOrThrow
   */
  export type projectmemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectmember to fetch.
     */
    where: projectmemberWhereUniqueInput
  }

  /**
   * projectmember findFirst
   */
  export type projectmemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectmember to fetch.
     */
    where?: projectmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmembers to fetch.
     */
    orderBy?: projectmemberOrderByWithRelationInput | projectmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectmembers.
     */
    cursor?: projectmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectmembers.
     */
    distinct?: ProjectmemberScalarFieldEnum | ProjectmemberScalarFieldEnum[]
  }

  /**
   * projectmember findFirstOrThrow
   */
  export type projectmemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectmember to fetch.
     */
    where?: projectmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmembers to fetch.
     */
    orderBy?: projectmemberOrderByWithRelationInput | projectmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectmembers.
     */
    cursor?: projectmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectmembers.
     */
    distinct?: ProjectmemberScalarFieldEnum | ProjectmemberScalarFieldEnum[]
  }

  /**
   * projectmember findMany
   */
  export type projectmemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectmembers to fetch.
     */
    where?: projectmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmembers to fetch.
     */
    orderBy?: projectmemberOrderByWithRelationInput | projectmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectmembers.
     */
    cursor?: projectmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmembers.
     */
    skip?: number
    distinct?: ProjectmemberScalarFieldEnum | ProjectmemberScalarFieldEnum[]
  }

  /**
   * projectmember create
   */
  export type projectmemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * The data needed to create a projectmember.
     */
    data: XOR<projectmemberCreateInput, projectmemberUncheckedCreateInput>
  }

  /**
   * projectmember createMany
   */
  export type projectmemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectmembers.
     */
    data: projectmemberCreateManyInput | projectmemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectmember update
   */
  export type projectmemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * The data needed to update a projectmember.
     */
    data: XOR<projectmemberUpdateInput, projectmemberUncheckedUpdateInput>
    /**
     * Choose, which projectmember to update.
     */
    where: projectmemberWhereUniqueInput
  }

  /**
   * projectmember updateMany
   */
  export type projectmemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectmembers.
     */
    data: XOR<projectmemberUpdateManyMutationInput, projectmemberUncheckedUpdateManyInput>
    /**
     * Filter which projectmembers to update
     */
    where?: projectmemberWhereInput
    /**
     * Limit how many projectmembers to update.
     */
    limit?: number
  }

  /**
   * projectmember upsert
   */
  export type projectmemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * The filter to search for the projectmember to update in case it exists.
     */
    where: projectmemberWhereUniqueInput
    /**
     * In case the projectmember found by the `where` argument doesn't exist, create a new projectmember with this data.
     */
    create: XOR<projectmemberCreateInput, projectmemberUncheckedCreateInput>
    /**
     * In case the projectmember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectmemberUpdateInput, projectmemberUncheckedUpdateInput>
  }

  /**
   * projectmember delete
   */
  export type projectmemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    /**
     * Filter which projectmember to delete.
     */
    where: projectmemberWhereUniqueInput
  }

  /**
   * projectmember deleteMany
   */
  export type projectmemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectmembers to delete
     */
    where?: projectmemberWhereInput
    /**
     * Limit how many projectmembers to delete.
     */
    limit?: number
  }

  /**
   * projectmember without action
   */
  export type projectmemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    assigneeId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    assigneeId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.task_status | null
    priority: $Enums.task_priority | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: number | null
    assigneeId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.task_status | null
    priority: $Enums.task_priority | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: number | null
    assigneeId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    dueDate: number
    createdAt: number
    updatedAt: number
    projectId: number
    assigneeId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    projectId?: true
    assigneeId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    projectId?: true
    assigneeId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    assigneeId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    assigneeId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    assigneeId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    status: $Enums.task_status
    priority: $Enums.task_priority
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    projectId: number
    assigneeId: number | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    assigneeId?: boolean
    user?: boolean | task$userArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type taskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    assigneeId?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "dueDate" | "createdAt" | "updatedAt" | "projectId" | "assigneeId", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | task$userArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      status: $Enums.task_status
      priority: $Enums.task_priority
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
      projectId: number
      assigneeId: number | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends task$userArgs<ExtArgs> = {}>(args?: Subset<T, task$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'Int'>
    readonly title: FieldRef<"task", 'String'>
    readonly description: FieldRef<"task", 'String'>
    readonly status: FieldRef<"task", 'task_status'>
    readonly priority: FieldRef<"task", 'task_priority'>
    readonly dueDate: FieldRef<"task", 'DateTime'>
    readonly createdAt: FieldRef<"task", 'DateTime'>
    readonly updatedAt: FieldRef<"task", 'DateTime'>
    readonly projectId: FieldRef<"task", 'Int'>
    readonly assigneeId: FieldRef<"task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task.user
   */
  export type task$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | user$projectArgs<ExtArgs>
    projectmember?: boolean | user$projectmemberArgs<ExtArgs>
    task?: boolean | user$taskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | user$projectArgs<ExtArgs>
    projectmember?: boolean | user$projectmemberArgs<ExtArgs>
    task?: boolean | user$taskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>[]
      projectmember: Prisma.$projectmemberPayload<ExtArgs>[]
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends user$projectArgs<ExtArgs> = {}>(args?: Subset<T, user$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectmember<T extends user$projectmemberArgs<ExtArgs> = {}>(args?: Subset<T, user$projectmemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task<T extends user$taskArgs<ExtArgs> = {}>(args?: Subset<T, user$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly passwordHash: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.project
   */
  export type user$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * user.projectmember
   */
  export type user$projectmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmember
     */
    select?: projectmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmember
     */
    omit?: projectmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmemberInclude<ExtArgs> | null
    where?: projectmemberWhereInput
    orderBy?: projectmemberOrderByWithRelationInput | projectmemberOrderByWithRelationInput[]
    cursor?: projectmemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectmemberScalarFieldEnum | ProjectmemberScalarFieldEnum[]
  }

  /**
   * user.task
   */
  export type user$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectmemberScalarFieldEnum: {
    projectId: 'projectId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type ProjectmemberScalarFieldEnum = (typeof ProjectmemberScalarFieldEnum)[keyof typeof ProjectmemberScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId',
    assigneeId: 'assigneeId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const projectOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type projectOrderByRelevanceFieldEnum = (typeof projectOrderByRelevanceFieldEnum)[keyof typeof projectOrderByRelevanceFieldEnum]


  export const taskOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type taskOrderByRelevanceFieldEnum = (typeof taskOrderByRelevanceFieldEnum)[keyof typeof taskOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'projectmember_role'
   */
  export type Enumprojectmember_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'projectmember_role'>
    


  /**
   * Reference to a field of type 'task_status'
   */
  export type Enumtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_status'>
    


  /**
   * Reference to a field of type 'task_priority'
   */
  export type Enumtask_priorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_priority'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: IntFilter<"project"> | number
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    ownerId?: IntFilter<"project"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    projectmember?: ProjectmemberListRelationFilter
    task?: TaskListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    user?: userOrderByWithRelationInput
    projectmember?: projectmemberOrderByRelationAggregateInput
    task?: taskOrderByRelationAggregateInput
    _relevance?: projectOrderByRelevanceInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    ownerId?: IntFilter<"project"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    projectmember?: ProjectmemberListRelationFilter
    task?: TaskListRelationFilter
  }, "id">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project"> | number
    name?: StringWithAggregatesFilter<"project"> | string
    description?: StringNullableWithAggregatesFilter<"project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    ownerId?: IntWithAggregatesFilter<"project"> | number
  }

  export type projectmemberWhereInput = {
    AND?: projectmemberWhereInput | projectmemberWhereInput[]
    OR?: projectmemberWhereInput[]
    NOT?: projectmemberWhereInput | projectmemberWhereInput[]
    projectId?: IntFilter<"projectmember"> | number
    userId?: IntFilter<"projectmember"> | number
    role?: Enumprojectmember_roleFilter<"projectmember"> | $Enums.projectmember_role
    createdAt?: DateTimeFilter<"projectmember"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type projectmemberOrderByWithRelationInput = {
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    project?: projectOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type projectmemberWhereUniqueInput = Prisma.AtLeast<{
    projectId_userId?: projectmemberProjectIdUserIdCompoundUniqueInput
    AND?: projectmemberWhereInput | projectmemberWhereInput[]
    OR?: projectmemberWhereInput[]
    NOT?: projectmemberWhereInput | projectmemberWhereInput[]
    projectId?: IntFilter<"projectmember"> | number
    userId?: IntFilter<"projectmember"> | number
    role?: Enumprojectmember_roleFilter<"projectmember"> | $Enums.projectmember_role
    createdAt?: DateTimeFilter<"projectmember"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "projectId_userId">

  export type projectmemberOrderByWithAggregationInput = {
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: projectmemberCountOrderByAggregateInput
    _avg?: projectmemberAvgOrderByAggregateInput
    _max?: projectmemberMaxOrderByAggregateInput
    _min?: projectmemberMinOrderByAggregateInput
    _sum?: projectmemberSumOrderByAggregateInput
  }

  export type projectmemberScalarWhereWithAggregatesInput = {
    AND?: projectmemberScalarWhereWithAggregatesInput | projectmemberScalarWhereWithAggregatesInput[]
    OR?: projectmemberScalarWhereWithAggregatesInput[]
    NOT?: projectmemberScalarWhereWithAggregatesInput | projectmemberScalarWhereWithAggregatesInput[]
    projectId?: IntWithAggregatesFilter<"projectmember"> | number
    userId?: IntWithAggregatesFilter<"projectmember"> | number
    role?: Enumprojectmember_roleWithAggregatesFilter<"projectmember"> | $Enums.projectmember_role
    createdAt?: DateTimeWithAggregatesFilter<"projectmember"> | Date | string
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: IntFilter<"task"> | number
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    status?: Enumtask_statusFilter<"task"> | $Enums.task_status
    priority?: Enumtask_priorityFilter<"task"> | $Enums.task_priority
    dueDate?: DateTimeNullableFilter<"task"> | Date | string | null
    createdAt?: DateTimeFilter<"task"> | Date | string
    updatedAt?: DateTimeFilter<"task"> | Date | string
    projectId?: IntFilter<"task"> | number
    assigneeId?: IntNullableFilter<"task"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
    _relevance?: taskOrderByRelevanceInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    status?: Enumtask_statusFilter<"task"> | $Enums.task_status
    priority?: Enumtask_priorityFilter<"task"> | $Enums.task_priority
    dueDate?: DateTimeNullableFilter<"task"> | Date | string | null
    createdAt?: DateTimeFilter<"task"> | Date | string
    updatedAt?: DateTimeFilter<"task"> | Date | string
    projectId?: IntFilter<"task"> | number
    assigneeId?: IntNullableFilter<"task"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"task"> | number
    title?: StringWithAggregatesFilter<"task"> | string
    description?: StringNullableWithAggregatesFilter<"task"> | string | null
    status?: Enumtask_statusWithAggregatesFilter<"task"> | $Enums.task_status
    priority?: Enumtask_priorityWithAggregatesFilter<"task"> | $Enums.task_priority
    dueDate?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"task"> | Date | string
    projectId?: IntWithAggregatesFilter<"task"> | number
    assigneeId?: IntNullableWithAggregatesFilter<"task"> | number | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    project?: ProjectListRelationFilter
    projectmember?: ProjectmemberListRelationFilter
    task?: TaskListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: projectOrderByRelationAggregateInput
    projectmember?: projectmemberOrderByRelationAggregateInput
    task?: taskOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    project?: ProjectListRelationFilter
    projectmember?: ProjectmemberListRelationFilter
    task?: TaskListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    passwordHash?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type projectCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutProjectInput
    projectmember?: projectmemberCreateNestedManyWithoutProjectInput
    task?: taskCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    ownerId: number
    projectmember?: projectmemberUncheckedCreateNestedManyWithoutProjectInput
    task?: taskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProjectNestedInput
    projectmember?: projectmemberUpdateManyWithoutProjectNestedInput
    task?: taskUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    projectmember?: projectmemberUncheckedUpdateManyWithoutProjectNestedInput
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    ownerId: number
  }

  export type projectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type projectmemberCreateInput = {
    role?: $Enums.projectmember_role
    createdAt?: Date | string
    project: projectCreateNestedOneWithoutProjectmemberInput
    user: userCreateNestedOneWithoutProjectmemberInput
  }

  export type projectmemberUncheckedCreateInput = {
    projectId: number
    userId: number
    role?: $Enums.projectmember_role
    createdAt?: Date | string
  }

  export type projectmemberUpdateInput = {
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutProjectmemberNestedInput
    user?: userUpdateOneRequiredWithoutProjectmemberNestedInput
  }

  export type projectmemberUncheckedUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectmemberCreateManyInput = {
    projectId: number
    userId: number
    role?: $Enums.projectmember_role
    createdAt?: Date | string
  }

  export type projectmemberUpdateManyMutationInput = {
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectmemberUncheckedUpdateManyInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taskCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    user?: userCreateNestedOneWithoutTaskInput
    project: projectCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    projectId: number
    assigneeId?: number | null
  }

  export type taskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutTaskNestedInput
    project?: projectUpdateOneRequiredWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type taskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    projectId: number
    assigneeId?: number | null
  }

  export type taskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userCreateInput = {
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
    project?: projectCreateNestedManyWithoutUserInput
    projectmember?: projectmemberCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
    project?: projectUncheckedCreateNestedManyWithoutUserInput
    projectmember?: projectmemberUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateManyWithoutUserNestedInput
    projectmember?: projectmemberUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUncheckedUpdateManyWithoutUserNestedInput
    projectmember?: projectmemberUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type ProjectmemberListRelationFilter = {
    every?: projectmemberWhereInput
    some?: projectmemberWhereInput
    none?: projectmemberWhereInput
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectmemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectOrderByRelevanceInput = {
    fields: projectOrderByRelevanceFieldEnum | projectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumprojectmember_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.projectmember_role | Enumprojectmember_roleFieldRefInput<$PrismaModel>
    in?: $Enums.projectmember_role[]
    notIn?: $Enums.projectmember_role[]
    not?: NestedEnumprojectmember_roleFilter<$PrismaModel> | $Enums.projectmember_role
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type projectmemberProjectIdUserIdCompoundUniqueInput = {
    projectId: number
    userId: number
  }

  export type projectmemberCountOrderByAggregateInput = {
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type projectmemberAvgOrderByAggregateInput = {
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type projectmemberMaxOrderByAggregateInput = {
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type projectmemberMinOrderByAggregateInput = {
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type projectmemberSumOrderByAggregateInput = {
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type Enumprojectmember_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projectmember_role | Enumprojectmember_roleFieldRefInput<$PrismaModel>
    in?: $Enums.projectmember_role[]
    notIn?: $Enums.projectmember_role[]
    not?: NestedEnumprojectmember_roleWithAggregatesFilter<$PrismaModel> | $Enums.projectmember_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprojectmember_roleFilter<$PrismaModel>
    _max?: NestedEnumprojectmember_roleFilter<$PrismaModel>
  }

  export type Enumtask_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[]
    notIn?: $Enums.task_status[]
    not?: NestedEnumtask_statusFilter<$PrismaModel> | $Enums.task_status
  }

  export type Enumtask_priorityFilter<$PrismaModel = never> = {
    equals?: $Enums.task_priority | Enumtask_priorityFieldRefInput<$PrismaModel>
    in?: $Enums.task_priority[]
    notIn?: $Enums.task_priority[]
    not?: NestedEnumtask_priorityFilter<$PrismaModel> | $Enums.task_priority
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type taskOrderByRelevanceInput = {
    fields: taskOrderByRelevanceFieldEnum | taskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    assigneeId?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assigneeId?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    assigneeId?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    assigneeId?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assigneeId?: SortOrder
  }

  export type Enumtask_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[]
    notIn?: $Enums.task_status[]
    not?: NestedEnumtask_statusWithAggregatesFilter<$PrismaModel> | $Enums.task_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtask_statusFilter<$PrismaModel>
    _max?: NestedEnumtask_statusFilter<$PrismaModel>
  }

  export type Enumtask_priorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_priority | Enumtask_priorityFieldRefInput<$PrismaModel>
    in?: $Enums.task_priority[]
    notIn?: $Enums.task_priority[]
    not?: NestedEnumtask_priorityWithAggregatesFilter<$PrismaModel> | $Enums.task_priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtask_priorityFilter<$PrismaModel>
    _max?: NestedEnumtask_priorityFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userCreateNestedOneWithoutProjectInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectInput
    connect?: userWhereUniqueInput
  }

  export type projectmemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<projectmemberCreateWithoutProjectInput, projectmemberUncheckedCreateWithoutProjectInput> | projectmemberCreateWithoutProjectInput[] | projectmemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectmemberCreateOrConnectWithoutProjectInput | projectmemberCreateOrConnectWithoutProjectInput[]
    createMany?: projectmemberCreateManyProjectInputEnvelope
    connect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
  }

  export type taskCreateNestedManyWithoutProjectInput = {
    create?: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput> | taskCreateWithoutProjectInput[] | taskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[]
    createMany?: taskCreateManyProjectInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type projectmemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<projectmemberCreateWithoutProjectInput, projectmemberUncheckedCreateWithoutProjectInput> | projectmemberCreateWithoutProjectInput[] | projectmemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectmemberCreateOrConnectWithoutProjectInput | projectmemberCreateOrConnectWithoutProjectInput[]
    createMany?: projectmemberCreateManyProjectInputEnvelope
    connect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput> | taskCreateWithoutProjectInput[] | taskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[]
    createMany?: taskCreateManyProjectInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectInput
    upsert?: userUpsertWithoutProjectInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProjectInput, userUpdateWithoutProjectInput>, userUncheckedUpdateWithoutProjectInput>
  }

  export type projectmemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<projectmemberCreateWithoutProjectInput, projectmemberUncheckedCreateWithoutProjectInput> | projectmemberCreateWithoutProjectInput[] | projectmemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectmemberCreateOrConnectWithoutProjectInput | projectmemberCreateOrConnectWithoutProjectInput[]
    upsert?: projectmemberUpsertWithWhereUniqueWithoutProjectInput | projectmemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: projectmemberCreateManyProjectInputEnvelope
    set?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    disconnect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    delete?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    connect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    update?: projectmemberUpdateWithWhereUniqueWithoutProjectInput | projectmemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: projectmemberUpdateManyWithWhereWithoutProjectInput | projectmemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: projectmemberScalarWhereInput | projectmemberScalarWhereInput[]
  }

  export type taskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput> | taskCreateWithoutProjectInput[] | taskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutProjectInput | taskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: taskCreateManyProjectInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutProjectInput | taskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: taskUpdateManyWithWhereWithoutProjectInput | taskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectmemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<projectmemberCreateWithoutProjectInput, projectmemberUncheckedCreateWithoutProjectInput> | projectmemberCreateWithoutProjectInput[] | projectmemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectmemberCreateOrConnectWithoutProjectInput | projectmemberCreateOrConnectWithoutProjectInput[]
    upsert?: projectmemberUpsertWithWhereUniqueWithoutProjectInput | projectmemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: projectmemberCreateManyProjectInputEnvelope
    set?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    disconnect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    delete?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    connect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    update?: projectmemberUpdateWithWhereUniqueWithoutProjectInput | projectmemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: projectmemberUpdateManyWithWhereWithoutProjectInput | projectmemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: projectmemberScalarWhereInput | projectmemberScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput> | taskCreateWithoutProjectInput[] | taskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: taskCreateOrConnectWithoutProjectInput | taskCreateOrConnectWithoutProjectInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutProjectInput | taskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: taskCreateManyProjectInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutProjectInput | taskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: taskUpdateManyWithWhereWithoutProjectInput | taskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutProjectmemberInput = {
    create?: XOR<projectCreateWithoutProjectmemberInput, projectUncheckedCreateWithoutProjectmemberInput>
    connectOrCreate?: projectCreateOrConnectWithoutProjectmemberInput
    connect?: projectWhereUniqueInput
  }

  export type userCreateNestedOneWithoutProjectmemberInput = {
    create?: XOR<userCreateWithoutProjectmemberInput, userUncheckedCreateWithoutProjectmemberInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectmemberInput
    connect?: userWhereUniqueInput
  }

  export type Enumprojectmember_roleFieldUpdateOperationsInput = {
    set?: $Enums.projectmember_role
  }

  export type projectUpdateOneRequiredWithoutProjectmemberNestedInput = {
    create?: XOR<projectCreateWithoutProjectmemberInput, projectUncheckedCreateWithoutProjectmemberInput>
    connectOrCreate?: projectCreateOrConnectWithoutProjectmemberInput
    upsert?: projectUpsertWithoutProjectmemberInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutProjectmemberInput, projectUpdateWithoutProjectmemberInput>, projectUncheckedUpdateWithoutProjectmemberInput>
  }

  export type userUpdateOneRequiredWithoutProjectmemberNestedInput = {
    create?: XOR<userCreateWithoutProjectmemberInput, userUncheckedCreateWithoutProjectmemberInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectmemberInput
    upsert?: userUpsertWithoutProjectmemberInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProjectmemberInput, userUpdateWithoutProjectmemberInput>, userUncheckedUpdateWithoutProjectmemberInput>
  }

  export type userCreateNestedOneWithoutTaskInput = {
    create?: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    connectOrCreate?: userCreateOrConnectWithoutTaskInput
    connect?: userWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutTaskInput = {
    create?: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>
    connectOrCreate?: projectCreateOrConnectWithoutTaskInput
    connect?: projectWhereUniqueInput
  }

  export type Enumtask_statusFieldUpdateOperationsInput = {
    set?: $Enums.task_status
  }

  export type Enumtask_priorityFieldUpdateOperationsInput = {
    set?: $Enums.task_priority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneWithoutTaskNestedInput = {
    create?: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    connectOrCreate?: userCreateOrConnectWithoutTaskInput
    upsert?: userUpsertWithoutTaskInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTaskInput, userUpdateWithoutTaskInput>, userUncheckedUpdateWithoutTaskInput>
  }

  export type projectUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>
    connectOrCreate?: projectCreateOrConnectWithoutTaskInput
    upsert?: projectUpsertWithoutTaskInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutTaskInput, projectUpdateWithoutTaskInput>, projectUncheckedUpdateWithoutTaskInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectCreateNestedManyWithoutUserInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type projectmemberCreateNestedManyWithoutUserInput = {
    create?: XOR<projectmemberCreateWithoutUserInput, projectmemberUncheckedCreateWithoutUserInput> | projectmemberCreateWithoutUserInput[] | projectmemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectmemberCreateOrConnectWithoutUserInput | projectmemberCreateOrConnectWithoutUserInput[]
    createMany?: projectmemberCreateManyUserInputEnvelope
    connect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
  }

  export type taskCreateNestedManyWithoutUserInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type projectmemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<projectmemberCreateWithoutUserInput, projectmemberUncheckedCreateWithoutUserInput> | projectmemberCreateWithoutUserInput[] | projectmemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectmemberCreateOrConnectWithoutUserInput | projectmemberCreateOrConnectWithoutUserInput[]
    createMany?: projectmemberCreateManyUserInputEnvelope
    connect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type projectUpdateManyWithoutUserNestedInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type projectmemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<projectmemberCreateWithoutUserInput, projectmemberUncheckedCreateWithoutUserInput> | projectmemberCreateWithoutUserInput[] | projectmemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectmemberCreateOrConnectWithoutUserInput | projectmemberCreateOrConnectWithoutUserInput[]
    upsert?: projectmemberUpsertWithWhereUniqueWithoutUserInput | projectmemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projectmemberCreateManyUserInputEnvelope
    set?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    disconnect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    delete?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    connect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    update?: projectmemberUpdateWithWhereUniqueWithoutUserInput | projectmemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projectmemberUpdateManyWithWhereWithoutUserInput | projectmemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projectmemberScalarWhereInput | projectmemberScalarWhereInput[]
  }

  export type taskUpdateManyWithoutUserNestedInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutUserInput | taskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutUserInput | taskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: taskUpdateManyWithWhereWithoutUserInput | taskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type projectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type projectmemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<projectmemberCreateWithoutUserInput, projectmemberUncheckedCreateWithoutUserInput> | projectmemberCreateWithoutUserInput[] | projectmemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectmemberCreateOrConnectWithoutUserInput | projectmemberCreateOrConnectWithoutUserInput[]
    upsert?: projectmemberUpsertWithWhereUniqueWithoutUserInput | projectmemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projectmemberCreateManyUserInputEnvelope
    set?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    disconnect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    delete?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    connect?: projectmemberWhereUniqueInput | projectmemberWhereUniqueInput[]
    update?: projectmemberUpdateWithWhereUniqueWithoutUserInput | projectmemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projectmemberUpdateManyWithWhereWithoutUserInput | projectmemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projectmemberScalarWhereInput | projectmemberScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutUserInput | taskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutUserInput | taskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: taskUpdateManyWithWhereWithoutUserInput | taskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumprojectmember_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.projectmember_role | Enumprojectmember_roleFieldRefInput<$PrismaModel>
    in?: $Enums.projectmember_role[]
    notIn?: $Enums.projectmember_role[]
    not?: NestedEnumprojectmember_roleFilter<$PrismaModel> | $Enums.projectmember_role
  }

  export type NestedEnumprojectmember_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projectmember_role | Enumprojectmember_roleFieldRefInput<$PrismaModel>
    in?: $Enums.projectmember_role[]
    notIn?: $Enums.projectmember_role[]
    not?: NestedEnumprojectmember_roleWithAggregatesFilter<$PrismaModel> | $Enums.projectmember_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprojectmember_roleFilter<$PrismaModel>
    _max?: NestedEnumprojectmember_roleFilter<$PrismaModel>
  }

  export type NestedEnumtask_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[]
    notIn?: $Enums.task_status[]
    not?: NestedEnumtask_statusFilter<$PrismaModel> | $Enums.task_status
  }

  export type NestedEnumtask_priorityFilter<$PrismaModel = never> = {
    equals?: $Enums.task_priority | Enumtask_priorityFieldRefInput<$PrismaModel>
    in?: $Enums.task_priority[]
    notIn?: $Enums.task_priority[]
    not?: NestedEnumtask_priorityFilter<$PrismaModel> | $Enums.task_priority
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumtask_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[]
    notIn?: $Enums.task_status[]
    not?: NestedEnumtask_statusWithAggregatesFilter<$PrismaModel> | $Enums.task_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtask_statusFilter<$PrismaModel>
    _max?: NestedEnumtask_statusFilter<$PrismaModel>
  }

  export type NestedEnumtask_priorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_priority | Enumtask_priorityFieldRefInput<$PrismaModel>
    in?: $Enums.task_priority[]
    notIn?: $Enums.task_priority[]
    not?: NestedEnumtask_priorityWithAggregatesFilter<$PrismaModel> | $Enums.task_priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtask_priorityFilter<$PrismaModel>
    _max?: NestedEnumtask_priorityFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type userCreateWithoutProjectInput = {
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
    projectmember?: projectmemberCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
    projectmember?: projectmemberUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProjectInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
  }

  export type projectmemberCreateWithoutProjectInput = {
    role?: $Enums.projectmember_role
    createdAt?: Date | string
    user: userCreateNestedOneWithoutProjectmemberInput
  }

  export type projectmemberUncheckedCreateWithoutProjectInput = {
    userId: number
    role?: $Enums.projectmember_role
    createdAt?: Date | string
  }

  export type projectmemberCreateOrConnectWithoutProjectInput = {
    where: projectmemberWhereUniqueInput
    create: XOR<projectmemberCreateWithoutProjectInput, projectmemberUncheckedCreateWithoutProjectInput>
  }

  export type projectmemberCreateManyProjectInputEnvelope = {
    data: projectmemberCreateManyProjectInput | projectmemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type taskCreateWithoutProjectInput = {
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    user?: userCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    assigneeId?: number | null
  }

  export type taskCreateOrConnectWithoutProjectInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>
  }

  export type taskCreateManyProjectInputEnvelope = {
    data: taskCreateManyProjectInput | taskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutProjectInput = {
    update: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProjectInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>
  }

  export type userUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectmember?: projectmemberUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectmember?: projectmemberUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projectmemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: projectmemberWhereUniqueInput
    update: XOR<projectmemberUpdateWithoutProjectInput, projectmemberUncheckedUpdateWithoutProjectInput>
    create: XOR<projectmemberCreateWithoutProjectInput, projectmemberUncheckedCreateWithoutProjectInput>
  }

  export type projectmemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: projectmemberWhereUniqueInput
    data: XOR<projectmemberUpdateWithoutProjectInput, projectmemberUncheckedUpdateWithoutProjectInput>
  }

  export type projectmemberUpdateManyWithWhereWithoutProjectInput = {
    where: projectmemberScalarWhereInput
    data: XOR<projectmemberUpdateManyMutationInput, projectmemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type projectmemberScalarWhereInput = {
    AND?: projectmemberScalarWhereInput | projectmemberScalarWhereInput[]
    OR?: projectmemberScalarWhereInput[]
    NOT?: projectmemberScalarWhereInput | projectmemberScalarWhereInput[]
    projectId?: IntFilter<"projectmember"> | number
    userId?: IntFilter<"projectmember"> | number
    role?: Enumprojectmember_roleFilter<"projectmember"> | $Enums.projectmember_role
    createdAt?: DateTimeFilter<"projectmember"> | Date | string
  }

  export type taskUpsertWithWhereUniqueWithoutProjectInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutProjectInput, taskUncheckedUpdateWithoutProjectInput>
    create: XOR<taskCreateWithoutProjectInput, taskUncheckedCreateWithoutProjectInput>
  }

  export type taskUpdateWithWhereUniqueWithoutProjectInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutProjectInput, taskUncheckedUpdateWithoutProjectInput>
  }

  export type taskUpdateManyWithWhereWithoutProjectInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutProjectInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    id?: IntFilter<"task"> | number
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    status?: Enumtask_statusFilter<"task"> | $Enums.task_status
    priority?: Enumtask_priorityFilter<"task"> | $Enums.task_priority
    dueDate?: DateTimeNullableFilter<"task"> | Date | string | null
    createdAt?: DateTimeFilter<"task"> | Date | string
    updatedAt?: DateTimeFilter<"task"> | Date | string
    projectId?: IntFilter<"task"> | number
    assigneeId?: IntNullableFilter<"task"> | number | null
  }

  export type projectCreateWithoutProjectmemberInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutProjectInput
    task?: taskCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutProjectmemberInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    ownerId: number
    task?: taskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutProjectmemberInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutProjectmemberInput, projectUncheckedCreateWithoutProjectmemberInput>
  }

  export type userCreateWithoutProjectmemberInput = {
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
    project?: projectCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProjectmemberInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
    project?: projectUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProjectmemberInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProjectmemberInput, userUncheckedCreateWithoutProjectmemberInput>
  }

  export type projectUpsertWithoutProjectmemberInput = {
    update: XOR<projectUpdateWithoutProjectmemberInput, projectUncheckedUpdateWithoutProjectmemberInput>
    create: XOR<projectCreateWithoutProjectmemberInput, projectUncheckedCreateWithoutProjectmemberInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutProjectmemberInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutProjectmemberInput, projectUncheckedUpdateWithoutProjectmemberInput>
  }

  export type projectUpdateWithoutProjectmemberInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProjectNestedInput
    task?: taskUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutProjectmemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type userUpsertWithoutProjectmemberInput = {
    update: XOR<userUpdateWithoutProjectmemberInput, userUncheckedUpdateWithoutProjectmemberInput>
    create: XOR<userCreateWithoutProjectmemberInput, userUncheckedCreateWithoutProjectmemberInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProjectmemberInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProjectmemberInput, userUncheckedUpdateWithoutProjectmemberInput>
  }

  export type userUpdateWithoutProjectmemberInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProjectmemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutTaskInput = {
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
    project?: projectCreateNestedManyWithoutUserInput
    projectmember?: projectmemberCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTaskInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt: Date | string
    project?: projectUncheckedCreateNestedManyWithoutUserInput
    projectmember?: projectmemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTaskInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
  }

  export type projectCreateWithoutTaskInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutProjectInput
    projectmember?: projectmemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutTaskInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    ownerId: number
    projectmember?: projectmemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutTaskInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>
  }

  export type userUpsertWithoutTaskInput = {
    update: XOR<userUpdateWithoutTaskInput, userUncheckedUpdateWithoutTaskInput>
    create: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTaskInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTaskInput, userUncheckedUpdateWithoutTaskInput>
  }

  export type userUpdateWithoutTaskInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateManyWithoutUserNestedInput
    projectmember?: projectmemberUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUncheckedUpdateManyWithoutUserNestedInput
    projectmember?: projectmemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projectUpsertWithoutTaskInput = {
    update: XOR<projectUpdateWithoutTaskInput, projectUncheckedUpdateWithoutTaskInput>
    create: XOR<projectCreateWithoutTaskInput, projectUncheckedCreateWithoutTaskInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutTaskInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutTaskInput, projectUncheckedUpdateWithoutTaskInput>
  }

  export type projectUpdateWithoutTaskInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProjectNestedInput
    projectmember?: projectmemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    projectmember?: projectmemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateWithoutUserInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    projectmember?: projectmemberCreateNestedManyWithoutProjectInput
    task?: taskCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    projectmember?: projectmemberUncheckedCreateNestedManyWithoutProjectInput
    task?: taskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutUserInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
  }

  export type projectCreateManyUserInputEnvelope = {
    data: projectCreateManyUserInput | projectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type projectmemberCreateWithoutUserInput = {
    role?: $Enums.projectmember_role
    createdAt?: Date | string
    project: projectCreateNestedOneWithoutProjectmemberInput
  }

  export type projectmemberUncheckedCreateWithoutUserInput = {
    projectId: number
    role?: $Enums.projectmember_role
    createdAt?: Date | string
  }

  export type projectmemberCreateOrConnectWithoutUserInput = {
    where: projectmemberWhereUniqueInput
    create: XOR<projectmemberCreateWithoutUserInput, projectmemberUncheckedCreateWithoutUserInput>
  }

  export type projectmemberCreateManyUserInputEnvelope = {
    data: projectmemberCreateManyUserInput | projectmemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type taskCreateWithoutUserInput = {
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    project: projectCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    projectId: number
  }

  export type taskCreateOrConnectWithoutUserInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput>
  }

  export type taskCreateManyUserInputEnvelope = {
    data: taskCreateManyUserInput | taskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type projectUpsertWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
  }

  export type projectUpdateWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>
  }

  export type projectUpdateManyWithWhereWithoutUserInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutUserInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    id?: IntFilter<"project"> | number
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    ownerId?: IntFilter<"project"> | number
  }

  export type projectmemberUpsertWithWhereUniqueWithoutUserInput = {
    where: projectmemberWhereUniqueInput
    update: XOR<projectmemberUpdateWithoutUserInput, projectmemberUncheckedUpdateWithoutUserInput>
    create: XOR<projectmemberCreateWithoutUserInput, projectmemberUncheckedCreateWithoutUserInput>
  }

  export type projectmemberUpdateWithWhereUniqueWithoutUserInput = {
    where: projectmemberWhereUniqueInput
    data: XOR<projectmemberUpdateWithoutUserInput, projectmemberUncheckedUpdateWithoutUserInput>
  }

  export type projectmemberUpdateManyWithWhereWithoutUserInput = {
    where: projectmemberScalarWhereInput
    data: XOR<projectmemberUpdateManyMutationInput, projectmemberUncheckedUpdateManyWithoutUserInput>
  }

  export type taskUpsertWithWhereUniqueWithoutUserInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutUserInput, taskUncheckedUpdateWithoutUserInput>
    create: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput>
  }

  export type taskUpdateWithWhereUniqueWithoutUserInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutUserInput, taskUncheckedUpdateWithoutUserInput>
  }

  export type taskUpdateManyWithWhereWithoutUserInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutUserInput>
  }

  export type projectmemberCreateManyProjectInput = {
    userId: number
    role?: $Enums.projectmember_role
    createdAt?: Date | string
  }

  export type taskCreateManyProjectInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    assigneeId?: number | null
  }

  export type projectmemberUpdateWithoutProjectInput = {
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProjectmemberNestedInput
  }

  export type projectmemberUncheckedUpdateWithoutProjectInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectmemberUncheckedUpdateManyWithoutProjectInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taskUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type taskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type projectmemberCreateManyUserInput = {
    projectId: number
    role?: $Enums.projectmember_role
    createdAt?: Date | string
  }

  export type taskCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.task_status
    priority?: $Enums.task_priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    projectId: number
  }

  export type projectUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectmember?: projectmemberUpdateManyWithoutProjectNestedInput
    task?: taskUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectmember?: projectmemberUncheckedUpdateManyWithoutProjectNestedInput
    task?: taskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectmemberUpdateWithoutUserInput = {
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutProjectmemberNestedInput
  }

  export type projectmemberUncheckedUpdateWithoutUserInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectmemberUncheckedUpdateManyWithoutUserInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    role?: Enumprojectmember_roleFieldUpdateOperationsInput | $Enums.projectmember_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taskUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type taskUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority?: Enumtask_priorityFieldUpdateOperationsInput | $Enums.task_priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}