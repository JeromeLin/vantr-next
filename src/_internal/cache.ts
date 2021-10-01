class LRUCache<K = unknown, V = unknown> {
  capacity: number;
  cache = new Map<K, V>();
  constructor(capacity: number) {
    this.capacity = capacity;
  }
  get(key: K): V | -1 {
    if (this.cache.has(key)) {
      const cache = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, cache!);
      return cache!;
    }
    return -1;
  }
  put(key: K, value: V) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}
