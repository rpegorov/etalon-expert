import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function App() {
  const defaultState = {
    center: [61.672917, 50.836793],
    zoom: 18.26,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState}>
        <Placemark geometry={[61.672917, 50.836793]} />
      </Map>
    </YMaps>
  );
}

// https://yandex.ru/maps/org/etalon/57855067318/?ll=50.836793%2C61.672917&mode=search&sctx=ZAAAAAgBEAAaKAoSCVCNl24Sa0lAEQrZeRub1U5AEhIJBjBl4ICW1j8Rp5NsdTklwD8iBgABAgMEBSgKOABAE0gBYiFhZGRfc25pcHBldD10b3BvbnltX2Rpc2NvdmVyeS8xLnhiNnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQ29sbGVjdGlvbnMvUmFuZG9tUG9zaXRpb249dHJ1ZWJCcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZURpc2NvdmVyeVRleHRSZXF1ZXN0cz0xYjpyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlRW1wdHlSZXF1ZXN0cz0xYjpyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlQ29tbW9uUGljTWVudT0xYjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlUmVxdWVzdHM9MWIwcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Bc2tEaXNjb3ZlcnlGb3JUb3Bvbnltcz0xYjJyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0NvbGxlY3Rpb25zL0VuYWJsZWRNaXg9dHJ1ZWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZVZlcnRpY2FsPTFqAnJ1nQHNzEw9oAEAqAEAvQG3lHsFwgEGtom5w9cB6gEA8gEA%2BAEAggIb0Y3RgtCw0LvQvtC9INGN0LrRgdC%2F0LXRgNGCigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=50.836793%2C61.672917&sspn=0.004605%2C0.001646&text=эталон%20эксперт&z=18.26