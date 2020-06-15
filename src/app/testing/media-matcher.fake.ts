/*
 * Using architecture of mock classes and testing patterns from:
 * https://github.com/angular/components/blob/master/src/cdk/layout/breakpoints-observer.spec.ts#L215
 */
import { Injectable } from '@angular/core';
import { FakeMediaQueryList } from './media-query-list.fake';


@Injectable()
export class FakeMediaMatcher {
  /** A map of match media queries. */
  private _queries = new Map<string, FakeMediaQueryList>();

  /** The number of distinct queries created in the media matcher during a test. */
  get queryCount(): number {
    return this._queries.size;
  }

  /** Fakes the match media response to be controlled in tests. */
  matchMedia(query: string): FakeMediaQueryList {
    const mql = new FakeMediaQueryList(true, query);
    this._queries.set(query, mql);
    return mql;
  }

  /** Clears all queries from the map of queries. */
  clear() {
    this._queries.clear();
  }

  /** Toggles the matching state of the provided query. */
  setMatchesQuery(query: string, matches: boolean) {
    if (this._queries.has(query)) {
      this._queries.get(query)!.setMatches(matches);
    } else {
      throw Error('This query is not being observed.');
    }
  }
}